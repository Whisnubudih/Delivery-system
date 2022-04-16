const jwt = require('jsonwebtoken')

function signToken(value){
    return jwt.sign(value,"Inirahasia")
}

function verifyToken(value){
    return jwt.verify(value,"Inirahasia")
}

module.exports = {signToken,verifyToken}