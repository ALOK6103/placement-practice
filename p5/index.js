const mongoose=require("mongoose")
const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.router")
const {noteRouter}=require("./routes/note.router")
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("App is Loaded")
})

app.use("/users",userRouter)
app.use("/notes",noteRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection 
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
})