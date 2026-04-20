

const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../config/db.js")
const z = require("zod");
const jwt = require("jsonwebtoken");
const {AdminModel} = require("../config/db.js");
const bcrypt = require("bcrypt");
const {JWT_ADMIN_SECRET} = ("../config/config.js")


// adminRouter.use(adminMiddleware);
// bcrypt ,zod , jsowebtoke 

// schema
const requiredBody = z.object({
  email: z.string().min(5).max(100).email(),
  password: z.string().min(5).max(100),
  firstname: z.string().min(1).max(100).trim(),
  lastname: z.string().min(1).max(100).trim(),
});
adminRouter.post("/signup", async(req, res) => {
   try {
      // valid input
      const parsed = requiredBody.safeParse(req.body);
      if (!parsed.success) {
        return res.json({
          message: "Incorrect Format",
          error: parsed.error.issues,
        });
      }
    
      const { email, password, firstname, lastname } = parsed.data; // parsed data
  
        // checking user exits
      const existingAdmin = await AdminModel.findOne({ email : email });
      if (existingAdmin) {
        return res.status(409).json({ message: "Admin already exits " });
      }
  
      //hashing password 
      const hashedpassword = await bcrypt.hash(password, 10 );
      await AdminModel.create({
        email : email,
        password : hashedpassword, // hashed password
        firstname : firstname,
        lastname : lastname
      })
      res.status(201).json({message : "Admin registerd Sucessfully"})
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message : "Internal Server error"
      })
    }
});

adminRouter.post("/signin", async(req, res) => {
  const {email, password} = req.body;
  
    const foundAdmin = await AdminModel.findOne({
      email : email
    })
  
    if(!foundAdmin){
      res.status(403).json({ message : "Admin does not exits in our database" });
    }
  
    const passwordMatched = await bcrypt.compare(password , foundAdmin.password)
  
    if(password){
      const token = jwt.sign({
        id: foundAdmin._id,
      },JWT_ADMIN_SECRET);
      
      // cookie login 
  
  
      res.json({
        token : token 
      })
    } else {
      res.status(403).json({
        message: "Incorrect Credentials",
      });
    }
});

adminRouter.post("/course", (req, res) => {});
adminRouter.put("/course", (req, res) => {});
adminRouter.get("/course/bulk", (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
