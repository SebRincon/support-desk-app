const { errorHandler } = require('./middlware/errorMiddleware')
const connectDB = require('./config/db')
const colors = require('colors')
// Configuring .env file
const dotenv = require('dotenv').config()

// Connect to Database
connectDB()

// Importing and setting up basic express
const express = require('express')

// Port will try .env port and will default to 8000
const PORT = process.env.PORT || 8000
const app = express()

// Middleware that allows data to be sent as raw json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hey')
})

// User Routes
app.use('/api/users', require('./routes/userRoutes'))

// Custom errorHandler as middleware
app.use(errorHandler)

// Serving express on port 5000
app.listen(PORT, () => { console.log('Pinged') })