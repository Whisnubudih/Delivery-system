const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models/index')


const authenticationMiddleWare = async  (req,res,next) => {
    
    try {
        const {access_token} = req.headers
        const payload = verifyToken(access_token) 
        
        
        if(!access_token){
            throw {name: "JsonWebTokenError"}
        }
        const user = await User.findOne({
            where: {
                
                email: payload.email,
            }
        }) 
        
        if (!user) {
            throw { name : "User_Not_Found"}
        }
        
        req.user = {
            id: user.id,
            role: user.role,
        }

        next()
    } catch (err) {
        next(err)
    }


}

module.exports = {authenticationMiddleWare}

