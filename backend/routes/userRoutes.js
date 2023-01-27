const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getAccount} = require('../controllers/userController')
const { protect } = require('../middlware/authMiddleware')

router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/account', protect, getAccount)


module.exports = router