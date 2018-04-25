var mongoose = require('mongoose');

var blong = new mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type:String
    },
    num: {
        type:Number
    }
}, {versionKey: false});

module.exports = mongoose.model('blong', blong, 'blong');