const { StatusCodes } = require('http-status-codes');

class AppError extends Error {
    constructor({
        name = "App error",
        message = "Enternal server Error !",
        explation = "service not availble for this time plese try after some time !",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    }={}){
        super();
        this.name = name;
        this.message = message;
        this.explation = explation;
        this.statusCode = statusCode;
    }
};

module .exports = AppError;