const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    AMPQ_URL: process.env.AMPQ_URL,
    
}