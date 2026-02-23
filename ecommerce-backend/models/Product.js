const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    category: String,
    images: [String]
}, { timestamps : true })

module.exports = mongoose.model("Product", productSchema)