import { NextFunction ,Response, Request } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";


const adminMiddleware = async(req: Request , res:Response, next:NextFunction) =>{
    const user = req.user
 if(user?.role == 'ADMIN'){
    next()
 }else{
   next (new UnauthorizedException('Unauthorized',ErrorCode.UNAUTHORIZED_EXCEPTION))  
 }

}

export default adminMiddleware