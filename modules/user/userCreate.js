const User = require("./Model");

function userCreate(req, res) {
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
            res.status(200).json("User created");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                role: req.body.role,
                }
            );
        })
        .finally(() => {
            console.log("END");
        });
}

module.exports = userCreate;