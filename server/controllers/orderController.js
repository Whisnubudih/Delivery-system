const { Order,Menu,User} = require('../models/index')


const getOrder = async (req,res,next) => {
    try {
        const result = await Order.findAll({
            include: [
                {
                    model: User,
                  
                },
                {
                    model: Menu,
                  
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getOrderId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Order.findByPk(id,{
            include: [
                {
                    model: User,
                  
                },
                {
                    model: Menu,
                  
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

const addOrder = async (req,res,next) => {
    try {
        
        const UserId = req.user.id
        const { name,noTable,noOrder,date,status,MenuId } = req.body
        const result = await Order.create({name,noTable,noOrder,date,status:"Aktif",MenuId,UserId })
       
        // const formatDate =() => {
        //     // console.log(this.history.createdAt)
        //     let timeData = new Date(result.date) 
        //     const timeDate = timeData.getDate()
        //     const timeMonth = timeData.getMonth() + 1
        //     const timeYear = timeData.getFullYear()
        //     return `${timeDate}${timeMonth}${timeYear}`
        // }
        // console.log(result.id)
        // const resultOrder = await Order.update({
        //     name: result.name,
        //     noTable: result.noTable,
        //     date:result.date,
        //     status:result.status,
        //     MenuId: result.MenuId,
        //     UserId:result.UserId, 
        //     noOrder: `ABC${formatDate()}-${result.noOrder}`,
        //  },
        //  {
        //      where: result.id,
        //      returning: true
        //  })
        
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}



const editOrder = async (req,res,next) => {
    try {
        const UserId = req.user.id
        const { id } = req.params
        const { name,noTable,noOrder,date,status,MenuId} = req.body
       
        const findOrder = await Order.findByPk(id)
        if (!findOrder) {
            throw { name: "notFound"}
        } 
      
        const result = await Order.update({
            name,noTable,noOrder,date,status,MenuId,UserId
        },
        {
            where: {id},
            returning: true
        })
        // const formatDate =() => {
        //     // console.log(this.history.createdAt)
        //     let timeData = new Date(result[1][0].date) 
        //     const timeDate = timeData.getDate()
        //     const timeMonth = timeData.getMonth() + 1
        //     const timeYear = timeData.getFullYear()
        //     return `${timeDate}${timeMonth}${timeYear}`
        // }

        // const resultOrder = await Order.update({ 
        //     noOrder: `ABC${formatDate()}-${result[1][0].noOrder}`,
        //  },
        //  {
        //      where: {id},
        //      returning: true
        //  })
    
        res.status(201).json(result[1][0])
    } catch (err) {
        next(err)
    }
}

const deleteOrder = async (req,res,next) => {
    try {
        const {id} = req.params
        const findOrder= await Order.findByPk(id)

        const result = await Order.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findOrder.id} success deleted`})
   } catch (error) {
       next(error)
   }
}

const updateOrder = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { status } = req.body
       
        const findOrder = await Order.findByPk(id)
        
        if (!findOrder) {
            throw { name: "notFound"}
        } 
       
        const result = await Order.update({
            status
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



module.exports = {getOrder,getOrderId,addOrder,deleteOrder,editOrder, updateOrder}