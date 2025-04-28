class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constructor);
    }
}


export const errorMiddleware=()=> (err,req,res,next) => {
    err.message=err.message || "Internal Server Error";
    err.statusCode=err.statusCode || 500;

    console.log(err);

    if(err.code===11000){
        err.message=`Duplicate ${Object.keys(err.keyValue)} Entered`;
        const statusCode=400;
        err=new ErrorHandler(message,statusCode);
    }

    if(err.name === "JsonWebTokenError"){
        err.message=`Json Web Token is invalid, please try again`;
        const statusCode=400;
        err=new ErrorHandler(message,statusCode);
    }

    if(err.name ==="TokenExpiredError"){
        err.message=`Json Web Token is expired, please try again`;
        const statusCode=400;
        err=new ErrorHandler(message,statusCode);
    }

    if(err.name ==="CastError"){
        err.message=`Cast Error: ${err.path} is not valid`;
        const statusCode=400;
        err=new ErrorHandler(message,statusCode);
    }

    const errorMessage= err.errors ? Object.values(err.errors).map((value)=> value.message).join(""):err.message
     return res.status(err.statusCode).json({
        success:false,
        message:errorMessage,
});
};
export default ErrorHandler;