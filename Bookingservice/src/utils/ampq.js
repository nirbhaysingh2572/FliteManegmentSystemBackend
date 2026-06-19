const ampqlib = require('amqplib');

const AMPQ_URL = require('../config/server-config');


let channel;
async function connnectRabbitMQ(){
    try {   
        const connection = await ampqlib.connect(AMPQ_URL);
        channel = await connection.createChannel();

        console.log("RabitMQ connected Sucessfully !");
        return channel;
    }
    catch(error){
        console.log("error during connectiong to RabbitMQ :", error)
    }
}

function getChannel(){
    if(!channel){
        console.log("RabbitMq is not connnected !");
    }
    return channel;
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
    connnectRabbitMQ,
    getChannel,
    publishMessage,

}


