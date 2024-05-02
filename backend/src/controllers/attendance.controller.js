const prisma = require('../../db/db.config')

const create_attendance = async (req, res) => {

}


const add_attendances = async (req, res) => {
    try {

        const attendance = await prisma.attendance.createMany({
            data: req.body
        })

        const count = await prisma.attendance.count()

        res.status(200).json({ data: attendance, count: count, message: "attendance are added" })

    } catch (error) {
        console.log(error)
    }
}

const get_all_attendances = async (req, res) => {
    try {

        const count = await prisma.attendance.count()

        res.status(200).json({ data: count, message: "number of attendance records." })

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    add_attendances: add_attendances,
    get_all_attendances: get_all_attendances
}
