const nodemailer = require('nodemailer');

const { ServiceError } = require('./errors/index');
const { GMAIL, GMAIL_PASS_KEY } = require('../config/server-config');


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    auth:{
        user: GMAIL,
        pass: GMAIL_PASS_KEY
    }
});

async function sendMail({
    from,
    to,
    subject,
    text,
    html
}={}){
    try{
        const response = await transporter.sendMail({ from, to, subject, text, html });
        console.log(response,"massege sended  !")
    }
    catch(error){
        console.log("some error in sending mail");
        throw(new ServiceError());
    }
};





module.exports = {
    transporter,
    sendMail,
    
}