var mongoose = require('mongoose');

var lunbos = new mongoose.Schema({
    newsId: {
        type: String
    },
    img: {
        type:String
    },
    title: {
        type:String
    },
}, {versionKey: false});

module.exports = mongoose.model('lunbos', lunbos, 'lunbos');