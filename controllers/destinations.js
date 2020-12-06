const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.exports = {
    new: newDestination,
    create,
    addToDestinations,
    show,
    delete: deleteDestination,
}

function newDestination(req, res){
    Destination.find({}, function(err, destinations) {
        res.render('destinations/new', {title: 'Add Destination', destinations})
    })
}
function create(req, res){
    Destination.create(req.body, function(err, destinations){
        res.redirect('/destinations/new')
    })
}

function addToDestinations(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        flight.airport.push(req.body.destinationId);
        flight.save(function(err) {
          res.redirect(`/flights/${flight._id}`);
        });
      });
}

function show(req, res){
    Destination.findById(req.params.id, function(err, destination){
        res.render('destinations/show', {title: 'Destination Detail', destination})
    })
}

function deleteDestination(req, res){
    console.log('Banananq')
    Destination.findByIdAndDelete(req.params.id, function(err, destinations){
        console.log('ERRORS')
        res.redirect('/destinations/new')
    })
}