const mongoose=require("mongoose")

const CarSchema=new mongoose.Schema({
    name:String,
    useremail:String,
    emailpassword:String,
    contactno:Number,
    companyname:String,
    color:String,
    model:String,
    fule:String,
    manufectureyear:Number,
    Killometers:Number,
    intialbid:Number,
})

const CarModel=mongoose.model("car",CarSchema)
module.exports = CarModel