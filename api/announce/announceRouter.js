const express = require("express");
const announceController = require("./announceController");

const router = express.Router();

router.get("/", announceController.getAnnounces);
router.post("/", announceController.createAnnounce);
router.put("/:id", announceController.updateAnnounceById);
// router.delete("/:id", announceController.updateAnnounceById);

module.exports = router;
