const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5050;

const classRoutes = require('./src/routes/class.route')
const studnetRoutes = require('./src/routes/student.route')
const standardRoutes = require('./src/routes/standard.route')
const attendanceRoute = require('./src/routes/attendance.route')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// middelwares
app.use('/api/class', classRoutes)
app.use('/api/student', studnetRoutes)
app.use('/api/standard', standardRoutes)
app.use('/api/attendance', attendanceRoute)



app.listen(PORT, () => {
    console.log(`sever is runnning at ${PORT}`)
})