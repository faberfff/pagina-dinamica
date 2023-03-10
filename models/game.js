const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const mongooseSoftDelete = require('mongoose-soft-delete');

const gameSchema = new Schema( {

  name: {
    type: String,
    trim: true,
  },

  gamers: [{
    type: String,
    trim: true,
    required: [true, 'El nombre del jugador es requerido'],
    lowercase: true,
  }],

  inprogress: {
    type: Boolean,
    default: true
 }

})

module.exports = Game = mongoose.model('Game', gameSchema);