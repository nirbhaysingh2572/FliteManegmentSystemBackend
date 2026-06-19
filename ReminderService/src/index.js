const express = require('express');


const { PORT } = require("./config/server-config");
const { connnectRabbitMQ } = require('./utils/ampq');

const app = express();

const startServer = async ()=>{

    app.listen(PORT, async ()=>{

        console.log(`server started at ${PORT}`);

        //connect RabitMQ
        await connnectRabbitMQ();

    });
    

}

startServer();