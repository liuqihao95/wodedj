var mongoose = require('mongoose');

var maps = new mongoose.Schema({
    longitude: {
        type: Number,
        require:true
    },
    latitude: {
        type: Number,
        require:true
    },
}, {versionKey: false});

module.exports = mongoose.model('maps', maps, 'maps');