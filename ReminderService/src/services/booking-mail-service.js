const { sendMail } = require('../utils/nodemailer');

async function bookingMail(msg){
    try{
        console.log("massege recevied : " ,msg);
    }
    catch(error){
        console.log("some error in  bookingMialservice : ", error);
    }
}


module.exports = {
    bookingMail,

}