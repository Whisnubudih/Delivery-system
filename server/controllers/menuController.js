const { Menu,User} = require('../models/index')


const getMenu = async (req,res,next) => {
    try {
        const result = await Menu.findAll({
            include: [
                {
                    model: User,
                  
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getMenuId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Menu.findByPk(id,{
            include: [
                {
                    model: User,
                  
                }
            ]
        })
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addMenu = async (req,res,next) => {
    try {
        const UserId = req.user.id
        const { name,status } = req.body
        const result = await Menu.create({name,UserId,status:"Ready"})
       
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}



const editMenu = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { name,status} = req.body
        const UserId = req.user.id
        const findMenu = await Menu.findByPk(id)
        if (!findMenu) {
            throw { name: "notFound"}
        } 
      
        const result = await Menu.update({
            name,UserId,status
        },
        {
            where: {id},
            returning: true
        })
    
        res.status(201).json(result[1][0])
    } catch (err) {
        next(err)
    }
}

const deleteMenu = async (req,res,next) => {
    try {
        const {id} = req.params
        const findMenu= await Menu.findByPk(id)

        const result = await Menu.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findMenu.id} success deleted`})
   } catch (error) {
       next(error)
   }
}




module.exports = {getMenu,getMenuId,addMenu,deleteMenu,editMenu}