
// the express error handler , when the headers have already been sent to the client


const errorMiddleware=(err , req, res, next)=>{

let status=err.status | 500;
const message=err.message | "Backend ERROR ";
const extraDetails=err.extraDetails | "Error from Backend";
return res.status(status).json({message , extraDetails})
}

module.exports=errorMiddleware;