const mongoose=require("mongoose")
const express=require("express")

const {noteModel}=require("../models/notes.model")

const noteRouter=express.Router()

noteRouter.post("/add",async(req,res)=>{
   
    try {
        await noteModel.create(req.body)
        res.send({"msg":"notes posted"})
    } catch (error) {
        console.log(error)
    }
})

noteRouter.get("/",async(req,res)=>{
    try {
       const note= await noteModel.find({userID:req.body.userID})
       res.send({note})
    } catch (error) {
     console.log(error)   
    }
})

module.exports={
    noteRouter
}