const express = require('express');
const router = express.Router();
const characterCtrl = require('../controlers/characters');

router.post('/', characterCtrl.createCharacter);
router.get('/:id', characterCtrl.getOneCharacter);
router.get('/', characterCtrl.getAllCharacters);

module.exports = router;
