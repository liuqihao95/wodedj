var mongoose = require('mongoose');

var newsTypes = new mongoose.Schema({
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

module.exports = mongoose.model('newsTypes', newsTypes, 'newsTypes');