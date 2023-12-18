const  express=require("express")
const router=express.Router()
const controlls=require("../controllers/auth-control")
const authMiddleware=require("../middlewares/authMiddleware")

router.get("" , (req,res)=>{
    res.status(200).send(" router welcome to  world best mern stack")
})


router.route("/home").get(controlls.home)
router.route("/sigin").post(controlls.Register)
router.route("/login").post(controlls.Login)
router.route("/user").get(authMiddleware, controlls.user)
module.exports=router