const User = require("./Model");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const {secret} = require("./config")
const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

function userLogin(req, res) {
    const {email, password} = req.body;
    User.findOne({email})
        .exec()
        .then((result) => {
            const validPassword = bcrypt.compareSync(password, result.password);
            if (!validPassword) {
                res.status(400).json({message: "Wrong password"})
            }
            const token = generateAccessToken(result._id, result.role);
            res.status(200).json({
                token,
                user: {
                    email: result.email,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    role: result.role
                }
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({message: `User with email ${email} not founded`});
        })
}

module.exports = userLogin;