const express = require('express')
const router = express.Router()
const {add_class, get_class, get_classes} = require('../controllers/classs.controller')

router.post('/add-class', add_class)
router.get('/get-class/:id', get_class)
router.get('/get-classes', get_classes)

module.exports = router