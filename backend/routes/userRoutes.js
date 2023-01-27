const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('Register Route')
})

router.post('/login', (req, res) => {
    res.send('login Route')
})

module.exports = router