var mongoose = require('mongoose');

var cards = new mongoose.Schema({
    isParent: {
        type: Number,
        default: 0,
        index: true
    },
    userId: {
        type: String
    },
    userImg: {
        type: String
    },
    userName: {
        type: String
    },
    toUserId: {
        type: String
    },
    toUserName: {
        type: String
    },
    toUserImg: {
        type: String
    },
    parentId: {
        type: String,
        default: ""
    },
    content: {
        type: String
    }
}, {versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}})
module.exports = mongoose.model("cards", cards, "cards");

