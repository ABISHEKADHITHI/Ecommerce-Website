const mongoose = require("mongoose")

const Cartschema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
            quantity: Number,
            price: Number
        }
    ],
    totalprice: Number
}, { timestamps: true })

module.exports = mongoose.model("Cart", Cartschema)