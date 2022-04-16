const {User} = require('../models/index')
const bcrypt = require('bcrypt')
const {signToken} = require('../helpers/jwt')

const waiterRegister = async(req,res,next)=>{
    try {
        const {name,password,email,role} = req.body
        const result = await User.create({
            name,password,email,role:'waiter'
        })
        res.status(201).json({
            id:result.id,
            email:result.email,
            
        })

    } catch (error) {
        next(error)
    }
}

const cashierRegister = async(req,res,next)=>{
    try {
        const {name,password,email,role} = req.body
        const result = await User.create({
            name,password,email,role:'cashier'
        })
        res.status(201).json({
            id:result.id,
            email:result.email,
            
        })

    } catch (error) {
        next(error)
    }
}

const Login = async(req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email){
            throw {name: "email is required"}
        }
        if(!password){
            throw {name: "Password is required"}
        }

       const result = await User.findOne({
           where:{email}
       })
       if(!result){
        throw {name: "Invalid email/password"}
       }


       const isPassword = bcrypt.compareSync(password, result.password)
       if(!isPassword){
        throw {name: "Invalid email/password"}
       }
       const payload ={
           id:result.id,
           email:result.email
       }

       const access_token = signToken(payload)
       res.status(200).json({access_token: access_token})

    } catch (error) {
        next(error)
    }
}





module.exports = {waiterRegister, Login,cashierRegister}