const mongoose = require('./connection')

const schema = new mongoose.Schema({
    name:{type:String},
    pokedexNumber:{type: Number},
    img:{type: String, default:"https://http2.mlstatic.com/colar-pingente-anime-geek-pokemon-pokebola-pokeball-esfera-D_NQ_NP_928688-MLB28019029999_082018-F.jpg"},
    generation:{type:Number, default: 1},
    evolutionStage:{type:String, default: 1},
    evolved: {type:Boolean},
    familyId:{type:Number},
    crossGen:{type:Boolean},
    type1:{type:String},
    type2:{type:String, default: ""},
    weather1:{type:String},
    weather2:{type:String, default: ""},
    statTotal:{type: Number},
    atk:{type: Number, default:0 },
    def:{type:Number, default:0},
    sta:{type:Number, default:0},
    legendary:{type:Number, default:0},
    aquireable:{type: Boolean},
    spawns:{type: Boolean},
    regional:{type: Boolean},
    raidable:{type: Number},
    hatchable:{type: Boolean},
    shiny:{type: Boolean},
    nest:{type: Boolean},
    newer:{type: Boolean},
    notGettable:{type: Boolean},
    futureEvolution:{type: Boolean},
    createdAt:{type: Date, default: Date.now},
    _100CP40:{type: Number},
    _100CP39:{type: Number}

})

const Poke = mongoose.model('Poke',schema)

module.exports = Poke