const { StatusCodes } = require('http-status-codes');

class AppError extends Error {
    constructor({
        name = "App error",
        massege = "Enternal server Error !",
        explation = "service not availble for this time plese try after some time !",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    }={}){
        super();
        this.name = name;
        this.massege = massege;
        this.explation = explation;
        this.statusCode = statusCode;
    }
};

module .exports = AppError;