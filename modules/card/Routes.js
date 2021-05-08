const cardCreate = require("./cardCreate");
const cardGetAll = require("./cardGetAll");
const cardUpdateById = require("./cardUpdateById");
const cardDelete = require("./cardDelete");
const cardDeleteAll = require("./cardDeleteAll");
const { Router } = require("express");
const router = Router();

router.get("/", cardGetAll);
router.post("/", cardCreate);
router.delete("/", cardDeleteAll);
router.patch("/:cardId", cardUpdateById);
router.delete("/:cardId", cardDelete);

module.exports = router;
