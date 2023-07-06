const { config } = require("dotenv");
const Updatedgame = require("../Models/updategame.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const CreateUpdatedgame = async (req, res) => {
  let { gamename, gameversion, gamedownload, gamebonus, downloadurl } =
    req.body;
  if (
    (req.file != "" ||
      gamename != "" ||
      gameversion != "" ||
      gamedownload != "" ||
      gamebonus != "",
    downloadurl != "")
  ) {
    try {
      let game = await Updatedgame.create({
        gamename: gamename,
        gameversion: gameversion,
        gamedownload: gamedownload,
        gamebonus: gamebonus,
        downloadurl: downloadurl,
        gameimg: `images/${req.file.filename}`,
      });

      if (game) {
        return respHandler.success(res, {
          status: true,
          data: [game],
          msg: "New Game Added Successfully!!",
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
      msg: "All field are required!!",
    });
  }
};

const GetUpdatedgames = async (req, res) => {
  try {
    let games = await Updatedgame.findAll();
    return respHandler.success(res, {
      status: true,
      data: [games],
      msg: "All New Game Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updateUpdatedgame = async (req, res) => {
  let {
    id,
    gamename,
    gameversion,
    gamedownload,
    gamebonus,
    downloadurl,
    gameimg,
  } = req.body;

  try {
    if (req?.file?.path) {
      let game = await Updatedgame.findOne({
        where: {
          id: id,
        },
      });
      removefile(`public/upload/${game?.gameimg.substring(7)}`);
    }
    let gamestatus = await Updatedgame.update(
      {
        gamename: gamename,
        gameversion: gameversion,
        gamedownload: gamedownload,
        gamebonus: gamebonus,
        downloadurl: downloadurl,
        gameimg: req.file ? `images/${req.file.filename}` : gameimg,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (gamestatus) {
      let game = await Updatedgame.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [game],
        msg: "Game Updated Successfully!!",
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

const DeleteUpdatedgame = async (req, res) => {
  try {
    let game = await Updatedgame.findOne({ id: req.body.id });
    if (game) {
      removefile(`public/upload/${game?.gameimg.substring(7)}`);
      await Updatedgame.destroy({
        where: {
          id: game.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "NewGame Deleted Successfully!!",
      });
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: ["not found"],
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
  CreateUpdatedgame,
  updateUpdatedgame,
  GetUpdatedgames,
  DeleteUpdatedgame,
};
