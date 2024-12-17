const express = require('express');
const router = express.Router();

//Example Routes

router.get('/', (req,res) => {
    res.send('Get all users')
})

router.post('/', (req,res) => {
    res.send('Create a new user')
})

module.exports = router;