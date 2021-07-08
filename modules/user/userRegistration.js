const User = require("./Model");
const bcrypt = require('bcryptjs');
const { validationResult} = require("express-validator");

async function userRegistration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({message: "Registration error", errors})
    }
    const {email, password, firstName, lastName, role} = req.body;
    //TODO: not working
    const candidate = await User.findOne({email});
    if (candidate) {
        console.log(candidate);
        return res.status(400).json({message: "Email is already registered"});
    }

    const hashPassword = bcrypt.hashSync(password, 7);
    const newUser = new User({email, password: hashPassword, firstName, lastName, role});
    newUser
        .save()
        .then(() => {
            res.status(200).json({message: "User successfully registered", userName: firstName + ' ' + lastName});
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({message: "Registration error"});
        })
        .finally(() => {
            console.log("END");
        });
}

module.exports = userRegistration;