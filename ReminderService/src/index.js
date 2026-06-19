const express = require('express');


const { PORT } = require("./config/server-config");
const { connnectRabbitMQ } = require('./utils/ampq');
const { BookingMailControler } = require('./controlers/index');

const app = express();

const startServer = async ()=>{

    app.listen(PORT, async ()=>{

        console.log(`server started at ${PORT}`);

        //connect RabitMQ
        await connnectRabbitMQ();

        //call bookingcontroler to excute there task
        BookingMailControler.bookingMail();

    });
    

}

startServer();