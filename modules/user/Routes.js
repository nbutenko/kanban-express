const userCreate = require("./userCreate");
const userGetAll = require("./userGetAll");
const userDeleteById = require("./userDeleteById");
const userGetOneByEmailPass = require("./userGetOneByEmailPass");

const { Router } = require("express");
const router = Router();

router.get("/", userGetAll);
router.post("/reg", userCreate);
router.post("/auth", userGetOneByEmailPass);
router.delete("/:userId", userDeleteById);

module.exports = router;