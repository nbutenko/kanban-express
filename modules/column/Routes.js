const columnCreate = require("./columnCreate");
const columnGetAll = require("./columnGetAll");
const columnDelete = require("./columnDelete");
const { Router } = require("express");
const router = Router();

router.get("/", columnGetAll);
router.post("/", columnCreate);
router.delete("/:columnId", columnDelete);

module.exports = router;
