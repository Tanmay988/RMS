const mongoose = require('mongoose');

const feedbackSchema = new moongoose.Schema({
    orderId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    feedback : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    }
});

const feedbackModel = mongoose.model('feedbackModel', feedbackSchema);

module.exports = feedbackModel;