const  mongoose = require("mongoose")

const {userModel}=require("../models/user.model")


const express=require("express")
var jwt=require("jsonwebtoken")

const bcrypt=require("bcrypt")

const userRouter=express.Router()

userRouter.post("/register",(req,res)=>{
    const {name,email,password}=req.body

    try {
        bcrypt.hash(password,5,async function(err,hash){
        
            await userModel.create({name,email,password:hash})
            res.status(200).send({"msg":"User Created"})
        })
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body

    try {
        const user=await userModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(result){
                    var token=jwt.sign({userID:user._id},"secret")
                    res.status(200).send({token})
                }else{
                    res.status(300).send({"msg":"Unauthorised"})
                }
            })
        }else{
            res.status(400).send({"msg":"User does not exist"})
        }
    } catch (error) {
        res.send({"msg":error})
    }
})


module.exports={
    userRouter
}