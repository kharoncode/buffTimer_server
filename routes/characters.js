const express = require('express');
const router = express.Router();
const characterCtrl = require('../controlers/characters');
const auth = require('../middleware/auth');

router.post('/', characterCtrl.createCharacter);
router.get('/:id', characterCtrl.getOneCharacter);
router.get('/realm/:realm', characterCtrl.getAllCharactersByRealm);
router.get('/', characterCtrl.getAllCharacters);

module.exports = router;
