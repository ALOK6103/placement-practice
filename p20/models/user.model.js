const mongoose=require("mongoose")

const mongoUrl=mongoose.Schema({
    name:String,
    email:String,
    pass:String
},
{
    versionKey:false
})

const UserModel=mongoose.model("user22",mongoUrl)

module.exports={
    UserModel
}