const express=require("express")

const notesRouter=express.Router()
const {notesModel}=require("../models/notes.model.js")

notesRouter.get("/", async(req,res)=>{

    let notes=await notesModel.find()
    res.status(200).send({notes})
 
})

notesRouter.post("/add", async(req,res)=>{
    try {
        await notesModel.create(req.body)
        res.status(200).send({msg:"notes created"})
    } catch (error) {
        
    }
})

notesRouter.put("/update/:id", async(req,res)=>{
    const {id}=req.params
    try {
        await notesModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({msg:"notes updated"})
    } catch (error) {
        res.status(400).send({msg:error})
    }
})

notesRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      // Use findByIdAndDelete to remove a note by its ID
      const deletedNote = await notesModel.findByIdAndDelete({ _id: id });
  
      if (deletedNote) {
        res.status(200).send({ msg: "Note deleted successfully", deletedNote });
      } else {
        res.status(404).send({ msg: "Note not found" });
      }
    } catch (error) {
      res.status(400).send({ msg: error });
    }
  });
  

module.exports={
    notesRouter
}