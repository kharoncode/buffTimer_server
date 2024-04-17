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

exports.createCharacter = (req, res, next) => {
   const characterObject = req.body;
   delete characterObject._id;
   const character = new Character({ ...characterObject });
   character
      .save()
      .then(() =>
         res
            .status(201)
            .json({ message: `Character ${character.name} created` })
      )
      .catch((error) => res.status(400).json({ error }));
};
