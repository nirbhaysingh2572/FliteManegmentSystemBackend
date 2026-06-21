const express = require('express');
const morgan = require('morgan');

const { PORT } = require('./config/server-config.js')
const ApiRoutes = require('./routs/index.js');

async function setuptAndRunServer(){

    const app = express();

    app.use(morgan('combined'));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async ()=>{

        console.log(`server started at : ${PORT}`);
    });

}   

setuptAndRunServer();