import mongoose from "mongoose";
const userScehema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})

export const User=new mongoose.model("User",userScehema)