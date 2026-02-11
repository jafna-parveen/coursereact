const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordercontroller");

router.post("/createorder", orderController.createOrder);
router.get("/getinstiorder", orderController.getInstitutionOrders);

router.get("/getallorder", orderController.getAllOrders);
router.get("/getsingleorder", orderController.getSingleOrder);
router.put("/updateorder", orderController.updateOrder);

module.exports = router;
