const userRegister = require("./userRegister");
const userGetAll = require("./userGetAll");
const userDeleteById = require("./userDeleteById");
const userLogin = require("./userLogin");

const { Router } = require("express");
const router = Router();

router.get("/", userGetAll);
router.post("/registration", userRegister);
router.post("/login", userLogin);
router.delete("/:userId", userDeleteById);

module.exports = router;