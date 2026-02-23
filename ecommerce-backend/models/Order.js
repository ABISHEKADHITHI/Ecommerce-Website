const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    orderitems: [
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    totalPrice: Number,
    paymentstatus: { String, default: "Pending" },
    orderstatus: { String, default: "processing" }
}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema)