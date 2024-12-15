const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env') // Load the .env file one directory above
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.black.bold.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold.underline)
    process.exit(1)
  }
}

module.exports = connectDB
