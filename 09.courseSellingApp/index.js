const express =  require("express");
const  mongoose  = require("mongoose");
const app = express();
app.use(express.json());

// Routing in express , the express Router 
//Routers
const {userRouter} = require ("./routes/user.js");
const {courseRouter} = require("./routes/course.js");
const {adminRouter} = require("./routes/admin.js");

// learn Passport Auth

// version

app.use("/api/v1/user" , userRouter);
app.use('/api/v1/course' , courseRouter);
app.use('/api/v1/admin' , adminRouter);



async function main() {
    await mongoose.connect("mongodb+srv://iamtridip06_db_user:XM6O9a7TvtkShxdk@cluster0.m5z7gpt.mongodb.net/course-Selling-App")
    app.listen(3000);
    console.log("listing on Port 3000")
}
main();

