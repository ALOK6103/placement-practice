var jwt=require("jsonwebtoken")

function isAuth(req,res,next){

    const token=req.headers.authorization.split(" ")[1]

    if(token){
     let decoded=jwt.verify(token,"secret")

     if(decoded){
        req.body.userID=decoded.userID
        next()
     }else{
        res.status(400).send({"msg":"Something went wrong"})
     }
    }else{
         res.status(400).send({"msg":"Unauthorised"})
    }
}

module.exports={
    isAuth
}