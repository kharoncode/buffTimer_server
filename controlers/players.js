const Player = require('../model/Player');

exports.getAllPlayers = (req, res, next) => {
   Player.find()
      .then((players) => res.status(200).json(players))
      .catch((error) => res.status(404).json({ error }));
};
