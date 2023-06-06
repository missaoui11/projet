const express = require("express")
const {Register, Login, updateusers, getmanyuser ,deleteuser } = require("../controller/controller")
const { isAuth } = require("../middlewar/isAuth")
const { registervalidation, validation, loginvalidation } = require("../middlewar/validation")
const userRooter = express.Router()

userRooter.put('/update/:id',updateusers)
userRooter.delete('/deleteuser/:id',deleteuser)
userRooter.get("/getmany",getmanyuser)
userRooter.post("/",registervalidation,validation,Register)
userRooter.post("/login",loginvalidation,validation,Login)
userRooter.get('/get',isAuth,(req,res)=>{
   res.send({user:req.user}) ; 
})
module.exports=userRooter