const jwt = require("jsonwebtoken");
const {secret} = require("../../modules/user/config");

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: "User is not authorized"})
            }
            const {role: userRole} = jwt.verify(token, secret);
            let isAdmin = roles.includes(userRole);

            if (!isAdmin) {
                return res.status(403).json({message: "You don't have permissions"})
            }
            next();

        } catch (err) {
            console.log(err)
            return res.status(403).json({message: "User is not authorized"})
        }
    }
}