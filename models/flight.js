const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {type:String, enum:['American', 'Southwest', 'United']},
    airport: {type:String, enum: ['DEN', 'AUS', 'LAX', 'SAN', 'DFW'], default: 'DEN'},
    flightNo: {type:Number, required: true, min: 10, max: 9999},
    departs: {
        type: Date, 
        default: () => Date.now() + 365 * 24 * 60 * 60 * 1000 
        // + 365 days * hours * minutes * seconds * milliseconds
         }
})

module.exports = mongoose.model('Flight', flightSchema)