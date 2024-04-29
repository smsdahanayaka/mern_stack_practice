const express=require("express");
const router=express.Router();

// Insert Model
const userModel=require("../Model/UserModel");
// insert user controller
const userController=require("../Controller/UserController");


router.get("/",userController.getAllusers);

module.exports=router;