const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema( {
    userId: {
        type: String,
        required: true,
        index: true,
    },

    email: {
        type: String,
        required: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        index: true,
        select: false,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("User", userSchema)