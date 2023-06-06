const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    password:String,
    adress:String,
    phone:String,
    experience:String,
    image:String
})

module.exports=mongoose.model("user",userSchema)