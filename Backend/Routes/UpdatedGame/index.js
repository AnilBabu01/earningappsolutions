const express = require("express");
const router = express.Router();
const UpdatedgameControler = require("../../Controllers/UpdatedgameControler");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/updategame")
  .post(upload.single("gameimg"), UpdatedgameControler.CreateUpdatedgame)
  .put(upload.single("gameimg"), UpdatedgameControler.updateUpdatedgame)
  .get(UpdatedgameControler.GetUpdatedgames)
  .delete(UpdatedgameControler.DeleteUpdatedgame);
module.exports = router;
