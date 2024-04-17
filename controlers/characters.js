const Character = require('../models/Character');

exports.getAllCharacters = (req, res, next) => {
   Character.find()
      .then((characters) => res.status(200).json(characters))
      .catch((error) => res.status(404).json({ error }));
};

exports.getOneCharacter = (req, res, next) => {
   Character.findOne({ _id: req.params.id })
      .then((character) => res.status(200).json(character))
      .catch((error) => res.status(404).json({ error }));
};
