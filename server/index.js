// mongodb+srv://mitchellkrystle2:<db_password>@cluster0.67q1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');
const connectDB = require('./db.js')
const app = express();

connectDB()

app.listen(3001, () => {
    console.log('App is running')
})