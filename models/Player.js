const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
   name: { type: String, required: true },
   currentLife: { type: Number, required: true },
   maxLife: { type: Number, required: true },
   picture: { type: String, required: true },
   message: { type: String, required: true },
   realm: { type: String, required: true },
});

module.exports = mongoose.model('Player', playerSchema);
