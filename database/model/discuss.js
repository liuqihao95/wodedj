var mongoose = require('mongoose');

var discuss = new mongoose.Schema({
    title: {
        type: String,
        require: true//必须传的参数
    },
    content: {
        type: String,
        require: true
    },
    state: {
        type: Number,
        default: 0
    }
}, {versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model('discuss', discuss, 'discuss');