
const { getChannel, subscribeMessage } = require('../utils/ampq');
const { BookingMailService } = require('../services/index');

const REMINDER_EXCHANGE = "REMINDER";
const BOOKING_BINDING_KEY = "booking";

bookingMail = async ()=>{
    try{
        const channel = getChannel();
        await subscribeMessage(
            BookingMailService.bookingMail,
            channel,
            REMINDER_EXCHANGE,
            BOOKING_BINDING_KEY
        );
    }
    catch(error){
        
        console.log("some error during booking mail : ", error)
    }
}

module.exports = {
    bookingMail,
    
}