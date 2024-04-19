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

exports.getAllCharactersByRealm = (req, res, next) => {
   Character.find()
      .then((characters) => {
         const realmCharacters = characters.filter(
            (cha) => cha.realm === req.params.realm
         );
         if (realmCharacters.length > 0) {
            res.status(200).json(realmCharacters);
         } else {
            throw new Error("This Realm doesn't exist");
         }
      })
      .catch((error) => res.status(404).json({ error }));
};

exports.deleteCharacter = (req, res, next) => {
   Character.deleteOne({ _id: req.params.id })
      .then(() =>
         res
            .status(200)
            .json({ message: `Character ${character.name} is deleted` })
      )
      .catch((error) => res.status(400).json({ error }));
};

exports.createCharacter = (req, res, next) => {
   const characterObject = req.body;
   delete characterObject._id;
   delete characterObject._userId;
   const character = new Character({
      ...characterObject,
      userId: req.auth.userId,
   });
   character
      .save()
      .then(() =>
         res
            .status(201)
            .json({ message: `Character ${character.name} is created` })
      )
      .catch((error) => res.status(400).json({ error }));
};

exports.updateCharacter = (req, res, next) => {
   const characterObject = req.body;
};
