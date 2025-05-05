const SendErrorDev = (err , res) => {
res.status(err.statusCode).json({
    status : err.status ,
    message : err.message ,
    error : err ,
    stack : err.stack
})}

const SendErrorProd = (err , res) => {
    if(err.isOperational)
    { res.status(err.statusCode).json({
        status : err.status ,
        message : err.message })
    }

    else {
        console.log("Error 💥" , err)
        res.status(500).json({
            status : "Error" ,
            message : "Something went very wrong" ,
        })
    }
}

module.exports = (err, req , res , next) => {
 err.status = err.status || "Error" ;
 err.statusCode = err.statusCode || 500 ;

 if(process.env.NODE_ENV === "development") SendErrorDev(err , res)
 if(process.env.NODE_ENV === "production") SendErrorProd(res)
    next();
}