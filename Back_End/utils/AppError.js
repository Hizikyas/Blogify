class AppError extends Error {
    constructor (message , status) {
     this.message = message ;
     this.statusCode = status ;
      this.isOperational = true ;
      this.status = `${this.statusCode}`.startsWith("4") ? "Failed"  : "Error"  ;
      Error.captureStackTrace(this , this.constructor) ;
    }
}

export default AppError ;

