const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = (req, res, next) => {
   bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
         const user = new User({
            name: req.body.name,
            password: hash,
         });
         user
            .save()
            .then(() => res.status(201).json({ message: 'New user created' }))
            .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
   User.findOne({ name: req.body.name })
      .then((user) => {
         !user &&
            res
               .status(401)
               .json({ message: 'Paire identifiant/mot de passe incorrecte' });
         user &&
            bcrypt
               .compare(req.body.password, user.password)
               .then((valid) => {
                  !valid &&
                     res.status(401).json({
                        message: 'Paire identifiant/mot de passe incorrecte',
                     });
                  valid &&
                     res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                           { userId: user._id },
                           'RANDOM_TOKEN_SECRET',
                           { expiresIn: '24h' }
                        ),
                     });
               })
               .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
};
