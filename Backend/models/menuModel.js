const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    restaurantId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    itemName : {
        type : String,
        required : true
    },
    itemPrice : {
        type : Number,
        required : true
    }
});

const menuModel = mongoose.model('menuModel', menuSchema);

module.exports = menuModel;