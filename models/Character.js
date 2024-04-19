const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
   name: { type: String, required: true },
   life: {
      type: {
         currentLife: { type: Number, required: true },
         maxLife: { type: Number, required: true },
      },
      required: true,
   },
   picture: { type: String, required: true },
   message: { type: String, required: true },
   realm: { type: String, required: true },
   spells: {
      type: {
         category: { type: String },
         name: { type: String },
         date: { type: Number },
      },
      required: true,
   },
   favoris: { type: [{ type: String }], required: true },
   intelligence: { type: Number, required: true },
   spheres: { type: [{ type: String }], required: true },
});

module.exports = mongoose.model('Character', characterSchema);
