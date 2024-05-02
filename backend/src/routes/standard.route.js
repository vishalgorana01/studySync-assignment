const express = require('express')
const router = express.Router()
const {add_standard, get_standard, get_standards} = require('../controllers/standard.controller')

router.post('/add-standard', add_standard)
router.get('/get-standard/:_id', get_standard)
router.get('/get-standards', get_standards)

module.exports = router