const cors=require("cors")
const express=require("express")
const router=require("./router/auth-router")
const app=express()
require("./db/conn")
const port=9000

const corsOption={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE , PATCH , HEAD",
    Credential:true,

}

app.use(cors(corsOption))



//||||||||||Json:::::::::::::::::::
app.use(express.json()) //this line of adds express middleware that pares
//incoing request bodies with json payload it important to place this before
app.use("/api/auth",router)
//http://localhost:9000/api/auth


app.listen(port , ()=>{
    console.log(port )
})