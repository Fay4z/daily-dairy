const express = require("express");
const summaryController = require("../controllers/summaryController")

const router = express.Router();

router.get("/", summaryController.summary_all)

router.get("/create", summaryController.summary_create_get)

router.get("/:id", summaryController.summary_single)

router.delete("/:id", summaryController.summary_del)

router.post("/", summaryController.summary_create_post)

module.exports = router;