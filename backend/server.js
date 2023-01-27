// Configuring .env file
const dotenv = require('dotenv').config()

// Importing and setting up basic express
const express = require('express')
// Port will try .env port and will default to 8000
const PORT = process.env.PORT || 8000
const app = express()


app.get('/', (req, res) => {
    res.send('hey')
 })

// Serving express on port 5000
app.listen(PORT, () => { console.log('Pinged') })