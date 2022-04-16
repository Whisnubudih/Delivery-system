const {Order} = require('../models/index')


const authorizeCashier = async  (req,res,next) => {
    
    
    try {
        const id = req.params.id
        const result = await Order.findByPk(id)
        if (!result) {
            throw { name: "not Found"}
        }

        if(req.user.role !== "cashier"){
            throw {name: "UNAUTHORIZED"}
        }

        next()
        
    } catch (err) {
       next(err)
    }
    


}
module.exports = {  authorizeCashier }