const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
   name: { type: String, required: true },
   life: {
      currentLife: { type: Number, required: true },
      maxLife: { type: Number, required: true },
   },
   picture: { type: String, required: true },
   message: { type: String, required: true },
   realm: { type: String, required: true },
   spells: { type: Array, required: true },
   favoris: { type: Array, required: true },
   intelligence: { type: Number, required: true },
   spheres: { type: Array, required: true },
});

module.exports = mongoose.model('Character', characterSchema);
