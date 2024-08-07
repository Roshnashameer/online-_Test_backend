const mongoose = require('mongoose')
// schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneno: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0

    },
})
// model
const users = mongoose.model("users", userSchema)
module.exports = users