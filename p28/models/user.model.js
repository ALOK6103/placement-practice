const mongoose=require("mongoose")

const userUrl=mongoose.Schema({
    name:String,
    password:String,
    email:String
},
{
    versionKey:false
})

const userModel=mongoose.model("user23",userUrl)

module.exports={
    userModel
}