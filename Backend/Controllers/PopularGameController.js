const { config } = require("dotenv");
const Populargame = require("../Models/populargame.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const Creategame = async (req, res) => {
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
      let game = await Populargame.create({
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

const Getgames = async (req, res) => {
  try {
    let games = await Populargame.findAll();
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

const updategame = async (req, res) => {
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
      let game = await Populargame.findOne({
        where: {
          id: id,
        },
      });
      removefile(`public/upload/${game?.gameimg.substring(7)}`);
    }

    let gamestatus = await Populargame.update(
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
      let game = await Populargame.findOne({
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

const Deletegame = async (req, res) => {
  try {
    let game = await Populargame.findOne({ id: req.body.id });
    if (game) {
      removefile(`public/upload/${game?.gameimg.substring(7)}`);
      await Populargame.destroy({
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
  Creategame,
  updategame,
  Getgames,
  Deletegame,
};
