const { config } = require("dotenv");
const Slider = require("../Models/slider.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const uploadimg = async (req, res) => {
  if (req.file != "") {
    try {
      let sliderimg = await Slider.create({
        imgurl: `images/${req.file.filename}`,
      });

      if (sliderimg) {
        return respHandler.success(res, {
          status: true,
          data: [sliderimg],
          msg: "Slider Img Added Successfully!!",
        });
      }
    } catch (err) {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: [err.message],
      });
    }
  } else {
    return respHandler.error(res, {
      status: false,
      msg: "field are required!!",
    });
  }
};

const getimg = async (req, res) => {
  try {
    let sliderimgs = await Slider.findAll();
    return respHandler.success(res, {
      status: true,
      data: [sliderimgs],
      msg: "Slider Imgs Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const deleteimg = async (req, res) => {
  try {
    let delimage = await Slider.findOne({ id: req.body.id });
    if (delimage) {
      if (removefile(`public/upload/${delimage?.imgurl.substring(7)}`)) {
        await Slider.destroy({
          where: {
            id: delimage?.id,
          },
        });

        return respHandler.success(res, {
          status: true,
          data: [],
          msg: "Slider Img Deleted Successfully!!",
        });
      } else {
        return respHandler.error(res, {
          status: false,
          msg: "Something Went Wrong!!",
          error: [err.message],
        });
      }
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: ["No Found"],
      });
    }
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

module.exports = {
  uploadimg,
  getimg,
  deleteimg,
};
