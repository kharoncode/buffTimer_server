const express = require('express');
const router = express.Router();
const playerCtrl = require('../controlers/player');

router.get('/', playerCtrl.signup);

module.exports = router;
