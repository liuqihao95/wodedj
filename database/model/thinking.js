var mongoose = require('mongoose');

var thinkings = new mongoose.Schema({
    userId: {
        type: String
    },
    img: {
        type: String
    },
    name: {
        type: String
    },
    state:{
        type:Number
    },
    reason: {
        type: String,
        default:''
    },
    passTime: {
        type: Number,
    }
}, {versionKey: false});

module.exports = mongoose.model('thinkings', thinkings, 'thinkings');