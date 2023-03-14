const express = require('express');
const { getMaxListeners } = require('../app');
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

//consultar juego por ID
router.get('/:id', async(req, res, next) =>{

  await Game.findById(req.params.id)

   .then(result => res.json(result))
   .catch(err => res.json(err));

});

router.get('/:id/winner', async(req, res, next) =>{

     Game.findById(req.params.id)
     const game = new Game({
        gamers: gamers.indexOf(1),
    })
  
     .then(result => res.json(result))
     .catch(err => res.json(err));
  
  });

module.exports = router;