import { NextFunction ,Response, Request } from "express";
import { ErrorCode } from "../exceptions/root";
import { UnauthorizedException } from "../exceptions/unauthorized";
import * as jwt from "jsonwebtoken"
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";

const authMiddleware = async(req: Request , res:Response, next:NextFunction) =>{
const token = req.headers.authorization

if(!token){
  return next (new UnauthorizedException('Unauthorized',ErrorCode.UNAUTHORIZED_EXCEPTION))  
}
try{

const payload = jwt.verify(token! , JWT_SECRET) as any
const user = await prismaClient.user.findFirst({where: {id: payload.userId}})
if(!user){
  return next (new UnauthorizedException('Unauthorized',ErrorCode.UNAUTHORIZED_EXCEPTION))  
  
}

req.user = user;
next();
}catch (error){
    next (new UnauthorizedException('Unauthorized',ErrorCode.UNAUTHORIZED_EXCEPTION))  
}

}

export default authMiddleware 

