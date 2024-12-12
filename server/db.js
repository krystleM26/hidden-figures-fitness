const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mitchellkrystle2:test123@cluster0.67q1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
             console.log(`MongoDB Connected: ${conn.connection.host}`)
        } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;
