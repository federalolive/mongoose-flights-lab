const { model } = require('../models/flight')
const Flight = require('../models/flight')

module.exports = {
    create
}
function create {
    Flight.findById(req.params.id, function(err, flight){
        flight.tickets.push(req.body)
        ticket.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}