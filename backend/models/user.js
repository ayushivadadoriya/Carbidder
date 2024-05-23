const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    contact:Number
})

const UserModel=mongoose.model("users",UserSchema)
module.exports = UserModel