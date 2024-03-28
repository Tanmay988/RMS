const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    restaurantId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    orderId : {
        type : String,
        required : true,
        unique : true
    },
    tableNo : {
        type : Number,
        required : true
    },
    orderItems : [
        {
            itemName : {
                type : String,
                required : true
            },
            itemPrice : {
                type : Number,
                required : true
            },
            itemQuantity : {
                type : Number,
                required : true
            }
        }
    ],
    orderStatus : {
        type : String,
        required : true
    },
    orderTotal : {
        type : Number,
        required : true
    }
});

const orderModel = mongoose.model('orderModel', orderSchema);

module.exports = orderModel;