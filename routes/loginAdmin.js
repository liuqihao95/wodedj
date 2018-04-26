var express = require('express');
var router = express.Router();
var users = require('../database/model/user');
var md5 = require('blueimp-md5');
var validator = require('validator')

router.post('/loginAdmin', (req, res) => {
    let {userId, pwd} = req.body;
    if (!userId || validator.isEmpty(userId.trim())) {
        res.json({
            data: "用户名不能为空",
            msg: "用户名不能为空",
            code: 400,
            ret: false
        });
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
            if (data.level.type===0) {
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
                    data: "不是管理员账号",
                    msg: "不是管理员账号",
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