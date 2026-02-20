const mongoose = require("mongoose")
const bycrpt = require("bcrypt")

const userschema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true 
    },
    password:{
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user"
    }
}, {timestamps: true})

userschema.pre("save", async function(next) {
    if(!this.isModified("password")){
        return next()
    } 
    this.password = await bycrpt.hash(this.password,10)
})

module.exports = mongoose.model("User", userschema)