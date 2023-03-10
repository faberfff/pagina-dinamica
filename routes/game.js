const express = require('express');
const router = express.Router();

router.get('/game', function(req, res, next) {

    const data = Game.find({
        $or: [
            {'deleted': { $eq: false }},
            {'deleted': { $exists: false }},
        ]
});
 data
    .then(result => {
        const game =  {
            id:'ffff-ggg-jjj',
            gamers: result,
            inprogress: false 
        }
        res.json(game);
    })
    .catch(err => console.log(err));
   
});

module.exports = router;