const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require("./models/user")
const CarModel = require("./models/car")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/profile");

app.post('/login' , (req ,res) => {
  const {email,password} = req.body;
  UserModel.findOne({email:email})
  .then(user => {
    if(user){
      if(user.password == password){
        res.json("Success")
      }
      else{
        res.json("password is incorrect")
      }
    }
    else{
      res.json("No record existed")
    }
  })
})

app.post('/register' , (req , res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.post('/addaution' , (req , res)=>{
  CarModel.create(req.body)
  .then(car => res.json(car))
  .catch(err => res.json(err))
})


app.listen(3001,()=>{
  console.log("server is running")
})