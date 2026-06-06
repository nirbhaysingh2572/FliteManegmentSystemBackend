const { StatusCodes } = require('http-status-codes');

const  AppError  = require('./app-error');


class ValidationError extends AppError {
    constructor({
        name = "validationErrror", 
        message = "Invalid input",
        explation = "You have enter invalid Plese check it and enter again",
        statusCode = StatusCodes.BAD_REQUEST
    }={}){
        super({name,message,explation,statusCode});
    }
}

module.exports = ValidationError;