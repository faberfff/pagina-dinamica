
const { response, request } = require('express');
const { Game } = require('../models/game');

const getGameId = async( req, res = response ) => {

    const { id } = req.params;
    const game = await Game.findById( id )
                          .populate('gamer', "name");
                          
}

/*const createGame = (req, res = response) =>{

    const game = new Game({
        gamers: req.body.gamers,
        inprogress: req.body.inprogress
    });


    game
        .save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
};*/
const createGame = async(req, res = response) => {
    const { name, gamers, inprogress } = req.body;
    const game = new Game({name, gamers, inprogress});

    await game.save();

    res.json({
        game
    });
}

module.exports = {
    getGameId,
    createGame
}