const ampqlib = require('amqplib');

const AMPQ_URL = require('../config/server-config');

async function createChannel(){
    try {   
        const connection = await ampqlib.connect(AMPQ_URL);
        const channel = await connection.createChannel();
        return channel;
    }
    catch(error){
        console.log("error during creating chanel :", error)
    }
}


async function publishMessage(channel, exchange, key, msg){
    try{
        await channel.assertExchange(exchange,'direct',{
            durable:false
        });
        await channel.publish(exchange, key, Buffer.from(msg) );
    }
    catch(error){
        console.log("some error in publising the message :", error);
    }
}



module.exports = {
    createChannel,
    publishMessage,

}


