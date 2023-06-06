const mongoose = require("mongoose")
const connectdb = ()=>{
    try {
       mongoose.connect("mongodb+srv://rbk:tunisia@cluster0.un3t4yt.mongodb.net/?retryWrites=true&w=majority" )
       console.log('database is connect')
    } catch (error) {
    console.log("error")
    }
}
module.exports=connectdb