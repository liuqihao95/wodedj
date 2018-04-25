var express = require('express');
var router = express.Router();
var users = require('../database/model/user');
var score = require('../database/model/score');
var md5 = require('blueimp-md5');
var validator = require('validator')

router.post('/login', (req, res) => {
    let {userId, pwd} = req.body;
    if (!userId || validator.isEmpty(userId.trim())) {
        res.json({
            data: "用户名不能为空",
            msg: "用户名不能为空",
            code: 400,
            ret: false
        })
        return;
    }
    if (!pwd || validator.isEmpty(pwd.trim())) {
        res.json({
            data: "密码不能为空",
            msg: "密码不能为空",
            code: 400,
            ret: false
        })
        return;
    }
    users.findOne({userId}, (err, data) => {
        pwd = md5(pwd);
        if (err) {
            res.json({
                data,
                msg: err,
                code: 400,
                ret: false
            });
            return
        }
        if (data == null) {
            res.json({
                data: "用户名错误或位注册",
                msg: "用户名错误或位注册",
                code: 400,
                ret: false
            });
            return
        } else if (pwd == data.pwd) {
            if (data.logging) {
                let createTime = Number(new Date())
                score.create({userId, type: 1, typeName: '登录', score: 1, createTime},(err,data)=>{
                    if(err){
                        res.json({
                            data: "积分出错",
                            msg: "失败",
                            code: 500,
                            ret: false
                        });
                        return
                    }
                });
                req.session.user = data;
                res.json({
                    data: data._id,
                    msg: "登录成功",
                    code: 200,
                    ret: true
                });
                return
            } else {
                res.json({
                    data: "你被禁止登陆",
                    msg: "你被禁止登陆",
                    code: 400,
                    ret: false
                });
                return
            }

        } else {
            res.json({
                data: "用户名与密码不匹配",
                msg: "用户名与密码不匹配",
                code: 400,
                ret: false
            });
            return
        }

    })
});

module.exports = router;