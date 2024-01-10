const mongoose=require("mongoose")

const notesSchema=mongoose.Schema({
    title:String
},{
    versionKey:false
})

const notesModel=mongoose.model("notes23",notesSchema)

module.exports={
    notesModel
}