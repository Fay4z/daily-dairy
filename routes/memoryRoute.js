const express = require("express");
const memoryController = require("../controllers/memoryController");

const router = express.Router();


router.get("/", memoryController.memory_all)

router.get("/create", memoryController.memory_create_get)

router.get("/:id", memoryController.memory_single)

router.post("/", memoryController.memory_create_post)

router.delete("/:id", memoryController.memory_del)

module.exports = router;
