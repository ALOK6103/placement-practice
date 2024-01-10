const express=require("express")

const app=express()
app.use(express)
const cors=require("cors")
app.use(cors)
const {connection}=require("./db.js")
const {userRouter}=require("./routes/user.routes.js")
const { notesRouter }=require("./routes/notes.routes.js")
const { isAuth } = require("./middleware/auth.middleware.js")
app.use("/",()=>{
    res.send("Homepage")
})

// app.use("/users",userModel)

app.use("/users",userRouter)
app.use(isAuth)
app.use("/notes",notesRouter)

app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
})
