const Flight = require('../models/flight')


module.exports = {
    create,
    deleteTicket,
}
function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.tickets.push(req.body)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function deleteTicket(req, res){
    Flight.findById(req.params.flightId)
    .then((flight) => {
        console.log('banana')
        const idx = flight.tickets.findIndex(ticket => ticket._id == req.params.ticketId)
        console.log(idx)
        flight.tickets.splice(idx, 1)
        flight.save()
        .then(()=> {
            console.log('flight._id')
            res.redirect(`/flights/${flight._id}`)
        })
    })
}