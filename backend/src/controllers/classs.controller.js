const prisma = require('../../db/db.config')

const add_class = async (req, res) => {
    const { name, teacherName, id, schedule } = req.body
    try {
        const new_class = await prisma.class.create({
            data: {
                name: name,
                id: id,
                teacherName: teacherName,
                schedule: new Date(schedule) 
            }
        })

        res.status(200).json({ data: new_class, message: "class is added successfully" });
    } catch (error) {
        console.log(error)
    }
}

const get_class = async (req, res) => {

}

const get_classes = async (req, res) => {
    try {
        const standards = await prisma.class.findMany()
        res.status(200).json({ data: standards, message: 'Students fetched Successfully' });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    add_class: add_class,
    get_class: get_class,
    get_classes: get_classes
}