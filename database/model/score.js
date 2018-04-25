var mongoose = require('mongoose');

var score = new mongoose.Schema({
    type: {
        type: String
    },
    typeName: {
        type: String
    },
    userId: {
        type:String
    },
    createTime: {
        type:Number
    },
    score:{
        type:Number
    }
}, {versionKey: false});

module.exports = mongoose.model('score', score, 'score');