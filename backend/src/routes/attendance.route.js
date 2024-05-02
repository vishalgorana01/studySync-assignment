const express = require('express')
const roter = express.Router()
const {add_attendances, get_all_attendances} = require('../controllers/attendance.controller')

roter.post('/add-attendances', add_attendances)
roter.get('/get-all-attendances', get_all_attendances)

module.exports = roter