const express = require("express");
const router = express.Router();
const SliderController = require("../../Controllers/SliderController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/uploadslider")
  .post(upload.single("sliderimg"), SliderController.uploadimg)
  .get(SliderController.getimg)
  .delete(SliderController.deleteimg);
module.exports = router;
