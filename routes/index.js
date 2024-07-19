const router = require("express").Router();

const orderRoute = require("../routes/order");

router.use("/api/order/", orderRoute);

module.exports = router;
