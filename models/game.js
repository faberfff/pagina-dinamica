const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const mongooseSoftDelete = require('mongoose-soft-delete');

const gameSchema = new Schema( {

  name: {
    type: String,
    trim: true,
  },

  idGamer: {
    type: String,
    default: 'fffff-ggg-jjjjj'
  },

  gamers: {
    type: [{
      type: String,
      trim: true,
      required: [true, 'El nombre del jugador es requerido'],
    }],
    
  },

  inprogress: {
    type: Boolean,
    default: true
 }

})

module.exports = Game = mongoose.model('Game', gameSchema);