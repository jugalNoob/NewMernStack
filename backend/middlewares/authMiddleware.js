const jwt=require("jsonwebtoken")
const   User=require("../models/model")


const authMiddleware=async(req,res,next)=>{

    const token=req.header('Authorization')

    if(!token){
        return res.status(401)
        .json({msg:"Unauthorized HTTP , Token not Provide"})
    }
    console.log(token , "token")

    const jwttoken=token.replace("Bearer"," ").trim()
    
    console.log(jwttoken)


    try {
        
        const isVerified=jwt.verify(jwttoken ,"kjhsduhkdfvikuuhfdvhkufdvfvfviufsvjhfviuffv" )

        console.log(isVerified , "this is verfied")


        const userData=await User.findOne({email:isVerified.email})
        console.log(userData)
        next()
    } catch (error) {
        console.log(error)
    }

   
}

module.exports=authMiddleware