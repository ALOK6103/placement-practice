
const {notesRouter}=require("./routes/notes.routes.js")
const cors=require("cors")
const express=require("express")
const {connection}=require("./db.js")
const {isAuth}=require("./middleware/auth.middleware.js")
const {userRouter}=require("./routes/users.routes.js")
const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page landed")

})
app.use("/users",userRouter)
app.use(isAuth)
app.use("/notes",notesRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
})