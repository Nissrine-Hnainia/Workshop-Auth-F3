//1-require jsonwebtoken
const jwt = require('jsonwebtoken')

//2-require user schema 
const User = require('../models/user')

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers['auth-token']

        //checking valid token
        if (!token) {
            return res.status(400).json({msg: "Invalid token"})
        }

        //decode token
        const decoded = await jwt.verify(token, process.env.secretOrKey)

        //find the user
        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(403).send({msg: "authorization forbidden"})
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(500).send({msg: "Invalid token"})
    }
}

module.exports = isAuth