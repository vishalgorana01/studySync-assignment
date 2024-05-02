const express = require('express')
const router = express.Router()
const {add_student, get_student, get_students, get_students_by_standard} = require('../controllers/student.controller')

router.post('/add-student', add_student)
router.get('/get-student/:id', get_student)
router.get('/get-students', get_students)
router.get('/get-students-by-standard/:_id', get_students_by_standard)

module.exports = router