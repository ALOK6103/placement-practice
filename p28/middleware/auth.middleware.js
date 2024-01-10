const jwt=require("jsonwebtoken")

function isAuth(req,res,next){
    const token=req.headers.authorization.split(" ")[1]

    if(token){
        let decoded=jwt.sign(token,"secret")

        if(decoded){
            req.body.userID=decoded.userID
            next()
        }else{
            res.status(400).send({"msg":"unauthorised"})
        }
    }else{
        res.status(400).send({"msg":"user not found"})
    } 9549073649
}

module.exports={
    isAuth
}