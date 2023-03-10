const express = require('express');
const router = express.Router();

router.get('/game/:id', async(req, res, next) => {

    const gameId = await Game.findId();
    res.render('gameId', { gameId });
});

module.exports = router;