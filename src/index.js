require('dotenv').config()


const initializeDatabase = require('./database.js');
initializeDatabase(process.env.MONGO_URL);
require('./api.js');



