const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema( {
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // select: false,
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
        default: "USER",
    },
})

module.exports = mongoose.model("User", userSchema)