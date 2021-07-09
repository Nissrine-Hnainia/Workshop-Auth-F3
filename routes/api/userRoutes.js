//1-require express
const express = require('express')


//2-require user schema
const User = require('../../models/user')

//3-require router from express
const router = express.Router()


//4-require bcrypt
const bcrypt = require('bcrypt')

//5-require jsonwebtoken
const jwt = require('jsonwebtoken')

//6-require validators
const {registerValidators, loginValidators, validator} = require('../../middlewares/express-validator')

//7-require isAuth
const isAuth = require('../../middlewares/isAuth')


//@route /api/users/register
//desc create new user
//access public
router.post('/register', registerValidators(), validator, async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    try {
        //checking required fields
        // if (!firstName || !lastName || !email || !password) {
        //     return res.status(400).json({msg: "Please enter you credentials"})
        // }

        //checking if user is already registered
        let user = await User.findOne({email}) 
        if (user) {
            return res.status(400).json({msg: "User already exists"})
        }

        //create new user
        user = new User(req.body)

        //create salt
        const salt = 10 //recommended value

        //hash the password
        const hashedPassword = await bcrypt.hash(password, salt)

        //replace password with hashed password
        user.password = hashedPassword

        //sign user
        const payload = {
            id: user._id
        }

        //generate the token
        const token = await jwt.sign(payload, process.env.secretOrKey , {expiresIn: "1 day"})

        //save user
        await user.save()

        res.status(200).send({msg: "User created successfully", user, token})
    } catch (error) {
        res.status(500).send({msg: "Server error"})
    }
})


//@route /api/users/login
//desc sign in the user
//access public
router.post('/login', loginValidators(), validator, async (req, res) => {
    const {email, password} = req.body
    try {
        //test credentials
        // if (!email || !password) {
        //     return res.status(400).json({msg: "Please enter your credentials"})
        // }

        //checking if user exists
        let user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({msg: "Bad credentials"})
        }

        //checking password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({msg: "Bad credentials"})
        }

        //sign user
        const payload = {
            id: user._id
        }

        //generate the token
        const token = await jwt.sign(payload, process.env.secretOrKey , {expiresIn: "1 day"})

        res.status(200).send({msg: "user logged successfully", user, token})
    } catch (error) {
        res.status(500).send({msg: "server error"})
    }
})


//@route /api/users/auth
//desc getting authetified
//access private
router.get('/auth', isAuth, (req, res) => {
    res.status(200).send({user: req.user})
})

module.exports = router