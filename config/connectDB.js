//1-require mongoose
const mongoose = require('mongoose')

//2-require dotenv
require('dotenv').config(({path: "./config/.env"}))

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log('Database connected')
    } catch (error) {
        console.log("An error has occured while trying to connect")
    }
}

module.exports = connectDB