const userRegistration = require("./userRegistration");
const userGetAll = require("./userGetAll");
const userDeleteById = require("./userDeleteById");
const userLogin = require("./userLogin");
const {check} = require("express-validator");

const { Router } = require("express");
const router = Router();

router.get("/", userGetAll);
router.post("/registration", [
    check('email', 'Email cannot be empty field').notEmpty(),
    check('email', 'Email has incorrect format').isEmail(),
    check('password', 'Password cannot be empty field').notEmpty(),
    check('password', 'Password must contain at least 4, but not more than 10 characters').isLength({min:4, max:10}),
    check('firstName', 'First name cannot be empty field').notEmpty(),
    check('lastName', 'Last name cannot be empty field').notEmpty(),
], userRegistration);
router.post("/login", userLogin);
router.delete("/:userId", userDeleteById);

module.exports = router;