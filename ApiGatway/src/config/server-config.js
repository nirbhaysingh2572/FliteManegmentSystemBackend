const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    FLIGHTSEARCH_SERVICE_PATH: process.env.FLIGHTSEARCH_SERVICE_PATH,
    AUTH_SERVICE_PATH: process.env.AUTH_SERVICE_PATH,
    BOOKING_SERVICE_PATH: process.env.BOOKING_SERVICE_PATH,
    REMINDER_SERVICE_PATH: process.env.REMINDER_SERVICE_PATH,
    
}