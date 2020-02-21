const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://poke-mongo:27017/pokemons',{ useNewUrlParser: true, useUnifiedTopology: true})


module.exports = mongoose