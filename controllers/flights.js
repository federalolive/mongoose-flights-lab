const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res){
    const flight = new Flight(req.body)
    flight.save(function(err) {
    if (err) return res.render('flights/new')
    console.log(flight)
    res.redirect('/flights')
  })
    res.render('/flights')
}

