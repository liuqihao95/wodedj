const mongoose = require('mongoose');

const summarizes = new mongoose.Schema({
    pic: {
        type: String,
        require: true
    },
    state: {
        type: Number,     //0代表未审核刚添加 1代表审核通过 2代表审核不通过
        default: 0
    },
    userId: {
        type: String,
        index: true
    },
    reason:{
        type: String,
        default: ''
    },
    userName: {
        type: String,
        index: true
    },
    discussId: {
        type: String,
        index: true
    },
    blong: {
        type: String,
        index: true
    },
    common: [{
        userId: {   //评论人
            type: String
        },
        content: {  //评论内容 0优1良2中3差
            type: Number,
            default: 0
        }
    }]
}, {versionKey: false});

module.exports = mongoose.model('summarizes', summarizes, 'summarizes');