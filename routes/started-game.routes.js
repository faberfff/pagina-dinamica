const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.get('/', function(req, res, next) {
    const data = Game.find({
        $or: [
            { 'deleted': { $eq: false } },
            { 'deleted': { $exists: false} },
        ]
    });
    data
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

module.exports = router;