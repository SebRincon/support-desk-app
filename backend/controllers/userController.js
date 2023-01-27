const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
// @desc Register a new user
// @route /api/users
// @access Public 
const registerUser = asyncHandler(async(req, res) => { 
    const { name, email, password } = req.body
    if (!name || !email || !password) { 
        res.status(400)
        throw new Error("Please Include All Fields")
    }

    // Find if user exists
    const userExists = await User.findOne({ email })
    
    if (userExists) { 
        res.status(400)
        throw new Error("User Already Exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name, email, password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else { 
        res.status(400)
        throw new Error('Invalid user data')
    }

})


// @desc Login a new user
// @route /api/users/login
// @access Public 
const loginUser = asyncHandler(async (req, res) => { 
    const { email, password } = req.body
    const user = await User.findOne({ email })
    
    // Check there is a user and if password match
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else { 
        res.status(401)
        throw new Error('Invalid Credentials')
    }
})

module.exports = {
    registerUser,
    loginUser
}