const { StatusCodes } = require('http-status-codes');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { FLIGHTSEARCH_SERVICE_PATH, 
        AUTH_SERVICE_PATH, 
        BOOKING_SERVICE_PATH, 
        REMINDER_SERVICE_PATH 
    }= require('../config/server-config');



const ErrorHandeler = (service)=>{
    return (err, req, res)=> {

        console.log(`some error when creating proxy ${service}: `, err)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success: false,
            message: 'service unvalble',
            err: "service unavalble for this try after some time !"
        });
    }
}

const createProxy = (target,service = "someService")=>{
    return createProxyMiddleware({
        target,
        changeOrigin: true,
        onError: ErrorHandeler(service)
    });
}





module.exports = {
    FlightServiceProxy:createProxy(FLIGHTSEARCH_SERVICE_PATH,'FlightSearchService'),
    AuthServiceProxy: createProxy(AUTH_SERVICE_PATH,'AuthService'),
    BookingServiceProxy: createProxy(BOOKING_SERVICE_PATH,'BookingServiceProxy'),
    ReminderServiceProxy: createProxy(REMINDER_SERVICE_PATH,'ReminderServiceProxy'),

}