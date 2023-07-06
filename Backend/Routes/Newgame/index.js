const express = require("express");
const router = express.Router();
const NewgameController = require("../../Controllers/NewgameController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/newgame")
  .post(upload.single("gameimg"), NewgameController.CreateNewgame)
  .put(upload.single("gameimg"), NewgameController.updateNewgame)
  .get(NewgameController.GetNewgames)
  .delete(NewgameController.Deletenewgame);
module.exports = router;
