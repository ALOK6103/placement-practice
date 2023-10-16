const mongoose=require("mongoose")

const noteSchema=mongoose.Schema(
    {
        title:String,
        content:String,
        userID:String
    },
    {
        versionKey:false
    }
)

const noteModel=mongoose.model("notes",noteSchema)

module.exports={
    noteModel
}