require('dotenv').config();


const express = require('express');
const connectDB = require('./db.js')
const app = express();

connectDB()

const userRoutes = require('./userRoutes.js');
const { default: mongoose, connect } = require('mongoose');
//middleware
app.use(express.json());

//Define Routes (placeholder for now)
app.get('/', (req,res) => {
    res.send('API is running...');
});
//Set up server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('App is running')
})