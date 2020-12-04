const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create, 
    index,
    show,
    delete: deleteFlight
}

function newFlight(req, res) {
    res.render('flights/new', {err: '', title: 'New Flight'})
}

function create(req, res){
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
    if (err){
        return res.render('flights/new', {err:err, title:'Add Flight'})
    } 
    console.log(flight)
    res.redirect('/flights', {title: 'Flights'})
  })
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights:flights, title: 'All Flights'})
    })
}

function show(req,res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {title: 'Flight Details', flight})
    })
}

function deleteFlight(req, res){
    Flight.findByIdAndDelete(req.params.id)
        .then(res.redirect('/flights'))
}
