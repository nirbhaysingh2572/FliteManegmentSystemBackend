const express = require('express');


const { PORT } = require("./config/server-config");

const app = express();

const startServer = async ()=>{

    app.listen(PORT, ()=>{

        console.log(`server started at ${PORT}`);
    });
    

}

startServer();