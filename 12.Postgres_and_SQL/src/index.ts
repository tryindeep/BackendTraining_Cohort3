import "dotenv/config";
import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;
const pgClient = new Client(process.env.DATABASE_URL);
pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {
    const insertQuery =
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
    const addressInsertQuery =
      `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

    await pgClient.query("BEGIN;");
    const response = await pgClient.query(insertQuery, [username,email,password,]);
    const userId = response.rows[0].id;
    await new Promise( x => setTimeout(x, 100* 1000)) // stop the control on this line for 100s
    const addressInsertResponse = await pgClient.query(addressInsertQuery, [city,country,street,pincode,userId,]);

    await pgClient.query("COMMIT;");
   

    res.json({
      massage: "You have signed",
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error  while signing Up",
    });
  }
});

app.get("/better-metadata" , async(req , res ) => {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
                   FROM users
                   JOIN addresses ON users.id = addresses.user_id
                   WHERE users.id = $1;` // sql injection ${id}

    const response = await pgClient.query(query,[id])
    res.json({
        response : response.rows
    })
});



app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
