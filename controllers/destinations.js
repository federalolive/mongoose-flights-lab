const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.export = {
    new: newDestination,
}

function newDestination(req, res){
    res.render('destinations/new', {err: '', title: 'New Destination'})
}