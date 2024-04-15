const express = require('express');
const router = express.Router();
const characterCtrl = require('../controlers/characters');

router.get('/', characterCtrl.getAllCharacters);

module.exports = router;
