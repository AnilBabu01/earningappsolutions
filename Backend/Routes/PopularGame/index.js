const express = require("express");
const router = express.Router();
const PopularGameController = require("../../Controllers/PopularGameController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/populargame")
  .post(upload.single("gameimg"), PopularGameController.Creategame)
  .put(upload.single("gameimg"), PopularGameController.updategame)
  .get(PopularGameController.Getgames)
  .delete(PopularGameController.Deletegame);
module.exports = router;
