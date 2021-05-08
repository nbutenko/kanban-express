const cardCreate = require("./cardCreate");
const cardGetAll = require("./cardGetAll");
const cardUpdateById = require("./cardUpdateById");
const cardDelete = require("./cardDelete");
const { Router } = require("express");
const router = Router();

router.post("/", cardCreate);
router.get("/", cardGetAll);
router.patch("/:cardId", cardUpdateById);
router.delete("/:cardId", cardDelete);

module.exports = router;
