const userModel= require("../Model/UserModel");

const getAllusers=async(req,res,next)=>{
    let user;

    try{
        user=await userModel.find();
    }catch(err){
        console.log(err);
    }

    // not found
    if(!user){
        return res.status(404).json({message:"User not found"});
    }

    return res.status(200).json({user});
};

exports.getAllusers=getAllusers;