const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {type:String, enum:['American', 'Southwest', 'United']},
    airport: {type:String, enum: ['DEN', 'AUS', 'LAX', 'SAN', 'DFW'], default: 'DEN'},
    flightNo: Number,
    departs: {type:Date, default:function(){
        return new (Date().getFullYear()+1)
    }}
})

module.exports = mongoose.model('Flight', flightSchema)