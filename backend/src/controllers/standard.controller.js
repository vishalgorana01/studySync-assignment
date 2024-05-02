const prisma = require('../../db/db.config')

const add_standard = async (req, res) => {
    const { id, name } = req.body
    try {
        const new_standard= await prisma.standard.create({
            data: {
                id: id,
                name: name,
            }
        })

        res.status(200).json({data: new_standard, message: 'standard is added successfully'})
    } catch (error) {
        console.log(error);  
    } 
}


const get_standard = async (req, res) => {
    const id = parseInt(req.params._id)
    try {
        const  standard = await prisma.standard.findUnique({
            where: {
                id: id
            }
        })

        res.status(200).json({data: standard, message: 'Standard fetched Successfully'});
    } catch (error) {
        console.log(error)
    }
}

const get_standards = async (req, res) => {
    try {
        const  standards = await prisma.standard.findMany()

        res.status(200).json({data: standards, message: 'Standards fetched Successfully'});
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    add_standard: add_standard,
    get_standard: get_standard,
    get_standards: get_standards
}
