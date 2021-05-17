const User = require("./Model");
const bcrypt = require('bcryptjs');
const { validationResult} = require("express-validator");

function userRegistration(req, res) {
    const errors = validationResult(req);
    if(!errors){
        return res.status(400).json({message: "Registration error", errors})
    }
    const {email, password, firstName, lastName, role} = req.body;
    const candidate = User.findOne({email}).exec();
    if(candidate) {
        return res.status(400).json({message: "Email is already registered"});
    }

    const hashPassword = bcrypt.hashSync(password, 7);
    const newUser = new User({email, hashPassword, firstName, lastName, role});
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