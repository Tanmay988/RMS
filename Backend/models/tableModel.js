const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    restaurantId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    tableNo : {
        type : Number,
        required : true
    },
    url : {
        type : String,
        required : true
    }
});

const tableModel = mongoose.model('tableModel', tableSchema);

module.exports = tableModel;