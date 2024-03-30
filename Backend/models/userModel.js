const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true // to know when the user was created
});

const Usermodel = mongoose.model('Usermodel', UserSchema);

module.exports = Usermodel;