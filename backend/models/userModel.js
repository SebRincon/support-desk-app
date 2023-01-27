const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')
const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please add a name']
        },
        email: {
            type: String,
            required: [true, 'Please add a email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add a password']
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        // Timestamps that logs updates and creation times
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)