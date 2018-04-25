var mongoose = require('mongoose');

var apply = new mongoose.Schema({
    userId: {
        type: String
    },
    img: {
        type:String
    },
    birthday: {
        type:String
    },
    name:{
        type:String
    }
}, {versionKey: false});

module.exports = mongoose.model('apply', apply, 'apply');