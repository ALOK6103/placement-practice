const {userModel}=require("../models/user.model.js")
const express=require("express")
const userRouter=express.Router()

const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

userRouter.post("/register", async(req,res)=>{
    const {name,password,email}=req.body

    try {
        bcrypt.hash(password, 5, async function(err,hash){
            await userModel.create({name,email,password:hash})
            res.status(200).send({"msg":"user created"})
        })
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

userRouter.post("/login", async(req,res)=>{
    const {email, password}=req.body

    try {
        const user=await userModel.findOne({email})

        if(user){
          bcrypt.compare(password,user.password,function (err,result){

            var token=jwt.sign({userID:user._id},"secret")
            res.status(200).send({token})
          })  
        }else{
            res.status(400).send({"msg":"unauthorised"})
        }
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

module.exports={
    userRouter
}