const dotenv = require('dotenv');

dotenv.config();


module.exports = {
    PORT: process.env.PORT,
    GMAIL: process.env.GMAIL,
    GMAIL_PASS_KEY:process.env.GMAIL_PASS_KEY,
    
}