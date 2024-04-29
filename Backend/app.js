const express= require("express");
const mongoose= require("mongoose");
const route= require("./Modeuls/User/Routers/UserRoute");

// xpress file
const app= express();

// Middleware connection
// app.use("/",(req,res,next)=>{
//     res.send("It is working");
// });
app.use("/user",route);

// DB connection hD39DJK3Iqax8gJd
mongoose.connect("mongodb+srv://new-user:hD39DJK3Iqax8gJd@cluster0.w5tr1ku.mongodb.net/")
.then(()=>console.log("Connected to mongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>{
    console.log((err));
});
