const User = require("./Model");

function userRegister(req, res) {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
    });
    newUser
        .save()
        .then(() => {
            res.status(200).json(req.body.firstName);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("User not created");
        })
        .finally(() => {
            console.log("END");
        });
}

module.exports = userRegister;