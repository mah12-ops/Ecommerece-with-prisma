import { ErrorCode, HttpException } from "./root";

export class InternalExeption extends HttpException {
    constructor(message:string,errors:any, errorCode:number ){
         super(message , errorCode,500,errors)
    }
}