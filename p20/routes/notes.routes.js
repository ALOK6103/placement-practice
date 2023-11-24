const express=require("express")

const notesRouter=express.Router()
const {NoteModel}=require("../models/notes.model")

notesRouter.get("/", async(req,res)=>{
    try {
    let data=await NoteModel.find()
        res.status(200).send({data})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

notesRouter.post("/add", async(req,res)=>{

    try {
        await NoteModel.create(req.body)
        res.status(200).send({"msg":"user created"})
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports={
    notesRouter
}