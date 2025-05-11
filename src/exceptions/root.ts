
export class HttpException extends Error {
    message: string;
    errorCode:ErrorCode ;
    statusCode: number;
    errors:any;

    constructor(message:string,errorCode: ErrorCode,statusCode: number,error:any ){
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = error
    }
}


export enum ErrorCode {
USER_NOT_FOUND = 1000,
ADDRESS_NOT_FOUND= 1001,
USER_ALREADY_EXISTS = 1002,
INCORRECT_PASSWORD = 1003,
ADDRESS_NOT_BELONGS = 1004,
PRODUCT_NOT_FOUND= 1005,
UNPROCESSIBLE_SCHEMA = 2001,
INTERNAL_EXCEPTION = 3001,
UNAUTHORIZED_EXCEPTION = 4001
}