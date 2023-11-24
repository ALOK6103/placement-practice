const mongoose=require("mongoose")

const noteUrl=mongoose.Schema({
    title:String,
    userID:String
},
{
    versionKey:false
})

const NoteModel=mongoose.model("notess",noteUrl)

module.exports={
    NoteModel
}