const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

router.get('/destinations/new', destinationsCtrl.new)
module.exports = router