const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const DB_URL = process.env.SECRET_CONNECTION

// const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

module.exports = mongoose;