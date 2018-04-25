var express = require('express');
var router = express.Router();
var users = require('../database/model/user');
var md5 = require('blueimp-md5');
var validator = require('validator')

router.post('/changePwd', (req, res) => {
    let {pwd, newPwd} = req.body;
    let userId = req.session.user.userId;
    if (!pwd || validator.isEmpty(pwd.trim())) {
        res.json({
            data: "旧密码不能为空",
            msg: "旧密码不能为空",
            code: 400,
            ret: false
        });
        return;
    }
    if (!newPwd || validator.isEmpty(newPwd.trim())) {
        res.json({
            data: "新密码不能为空",
            msg: "新密码不能为空",
            code: 400,
            ret: false
        });
        return;
    }
    if (pwd == newPwd) {
        res.json({
            data: "新密码不能和旧密码一样",
            msg: "新密码不能和旧密码一样",
            code: 400,
            ret: false
        });
        return;
    }
    users.findOne({userId}, (err, data) => {
        pwd = md5(pwd);
        newPwd = md5(newPwd);
        if (err) {
            res.json({
                data,
                msg: err,
                code: 500,
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
            users.update({userId}, {$set: {pwd: newPwd}}, (err, data) => {
                if (err) {
                    res.json({
                        data,
                        msg: err,
                        code: 500,
                        ret: false
                    });
                    return
                }
                if (data.n == 1) {
                    req.session.user=null;
                    res.json({
                        data: "修改成功",
                        msg: "修改成功",
                        code: 200,
                        ret: true
                    });
                    return
                } else {
                    res.json({
                        data: "修改失败",
                        msg: "修改失败",
                        code: 400,
                        ret: false
                    });
                    return
                }
            })
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