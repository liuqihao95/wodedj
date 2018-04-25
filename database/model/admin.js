var mongoose = require('mongoose');
var md5 = require('blueimp-md5')

var users = new mongoose.Schema({
    img: {
        type: String,
        default: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3539016366,3763545913&fm=27&gp=0.jpg'
    },
    name: {
        type: String
    },

    userId: {
        type: String
    },
    homeAddress: {
        type: String
    },
    workAddress: {
        type: String
    },
    nation: {
        type: String
    },
    weixin: {
        type: String
    },
    qq: {
        type: String
    },
    sex: {
        type: String
    },
    highestDeg: {
        type: String
    },
    title: {
        type: String
    },
    wage: {
        type: String
    },
    createTime: {
        type: String
    },
    lastTime: {
        type: String
    },
    type: {
        type: String
    },
    blong: {
        type: String
    },
    pwd: {
        type: String,
        default: md5("123456")
    },
    logging: {
        type: Boolean,
        default: true
    }
}, {versionKey: false});

module.exports = mongoose.model('users', users, 'users');