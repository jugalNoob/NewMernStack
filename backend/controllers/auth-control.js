//in a express.js application a contoller refers to a part of your code
//this is responsible for handling the application logic controllers are 
//tyically used to process incming request interact with models (datasource)
//following the MVC(Model - View -Controller)
const User = require("../models/model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try {
        res.status(200).send("Router welcome to the world's best MERN stack");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const Register = async (req, res) => {
    try {
        const {name,  email, password } = req.body;

//check user email are not same but give me error
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: "Email already exists" });
        
        }

        // Hash the password (not implemented in this code snippet)

        const userCreated = await User.create({ name, email, password });
        console.log(userCreated);

     
        res.status(201).json({ msg: req.body  , 
        token:await userCreated.generateToken() ,
        userId:userCreated._id.toString(),
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Unsuccessful" });
    }
};


/// User Login and Logic 


const Login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const UserExit=await User.findOne({email})
        if(!UserExit){
            return res.status(400).json({message:"Invalid Your  login "})
        }else{
            const user=await bcrypt.compare(password  , UserExit.password)
            console.log("login successfull")
            if(user){
                res.status(201).json({ msg: "login successful" , 
                    token:await UserExit.generateToken() ,
                    userId:UserExit._id.toString(),
                    });
            }else{
                res.status(401).json({msg:"unsuccessfull Login"})
            }
        }
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
        console.error(error)
    }

}


// to send user data user Logic

const user=async(req,res)=>{

    try {
        const userdata=req.user;
        console.log(userdata)
      return  res.status(200).json({msg:userdata})
        
    } catch (error) {
        console.log(error)
    }

}


module.exports = { home, Register , Login  , user};
