const {Order} = require('../models/index')


const authorizeWaiter = async  (req,res,next) => {
    
    
    try {
        
        

        if(req.user.role !== "waiter"){
            throw {name: "UNAUTHORIZED"}
        }

        next()
        
    } catch (err) {
       next(err)
    }
    


}
module.exports = {  authorizeWaiter }