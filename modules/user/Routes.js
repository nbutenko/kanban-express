const userCreate = require("./userCreate");
const userGetAll = require("./userGetAll");
const userDeleteById = require("./userDeleteById");

const { Router } = require("express");
const router = Router();

router.get("/", userGetAll);
router.post("/", userCreate);
router.delete("/:userId", userDeleteById);

module.exports = router;