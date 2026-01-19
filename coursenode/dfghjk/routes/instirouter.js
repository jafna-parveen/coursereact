const express = require("express");
const router = express.Router();
const instiController = require("../controllers/insticontrol");



// CREATE
router.post("/add-insti", instiController.createInsti);

// READ
router.get("/allinsti", instiController.getAllInsti);
router.get("/oneinsti/:id", instiController.getInstiById);

// UPDATE
router.patch("/updinstitute/:id", instiController.updateInsti);

// DELETE
router.delete("/delinstitute/:id", instiController.deleteInsti);
module.exports = router;