const User = require("../models/User")
const jwt = require("jsonwebtoken")

const generatetoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' }) 
}

exports.register = async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await User.findOne({ email })
    if ( userExist ){
        return res.status(400).json({ message: "user already exist"})
    }
    const user = await User.create({name, email, password})

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generatetoken(user._id)
    })
}

exports.login = async (req, res) => {
    const {email, password } = req.body

    const user = await User.findOne({ email })

    if (user && ( await require("bycrptjs").compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generatetoken(user._id)
        })
    }
    else{
        return res.status(401).json({ message: "invalid credintial"})
    }
}