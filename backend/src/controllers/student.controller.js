const prisma = require('../../db/db.config')

const add_student = async (req, res) => {
    const { id, name, email, rollno, standardId } = req.body
    console.log(req.body)
    try {
        const existing_student = await prisma.student.findUnique({
            where: {
                email: email
            }
        })

        if (existing_student) {
            return res.status(400).json({ message: 'Student already exists' })
        }

        const new_student = await prisma.student.create({
            data: {
                id: id,
                name: name,
                email: email,
                roll_no: rollno,
                standardId: parseInt(standardId)
            }
        })

        res.status(200).json({ data: new_student, message: 'student is added successfully' })
    } catch (error) {
        console.log(error);
    }
}


const get_student = async (req, res) => {

}

const get_students_by_standard = async (req, res) => {
    const stdId = parseInt(req.params._id)
    try {
        const students = await prisma.student.findMany({
            where: {
                standardId: stdId
            }
        })

        res.status(200).json({ data: students, message: 'Students of a particular standard fetched Successfully' });
    } catch (error) {
        console.log(error)
    }
}

const get_students = async (req, res) => {
    try {
        const students = await prisma.student.findMany()

        res.status(200).json({ data: students, message: 'Students fetched Successfully' });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    add_student: add_student,
    get_student: get_student,
    get_students: get_students,
    get_students_by_standard: get_students_by_standard
}
