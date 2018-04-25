var express = require('express');
var router = express.Router();
var users = require('../../database/model/user');
var thinking = require('../../database/model/thinking');
var summarize = require('../../database/model/summarize');
var card = require('../../database/model/card');
var md5 = require('blueimp-md5');

router.post('/getMany', (req, res) => {//前台获得用户信息
    let {blong} = req.body;
    users.find({blong}, {
        pwd: 0,
        level: 0,
        homeAddress: 0,
        workAddress: 0,
        weixin: 0,
        qq: 0,
        createTime: 0,
        lastTime: 0
    }, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: '查询出错',
                ret: true
            })
        } else if (data == null || data.length == 0) {
            res.json({
                data,
                code: 400,
                msg: '你输入的参数有误',
                ret: true
            })
        } else {
            res.json({
                data,
                code: 200,
                msg: 'success',
                ret: true
            })
        }

    })
});

router.post('/get', (req, res) => {
    let {page = 1, rows = 5, type = 1, blong} = req.body;
    let params = {};
    if (req.session.user.level.type !== 0) {
        res.json({
            data: "你不是管理员",
            msg: "你没有权限",
            code: 400,
            ret: true
        });
        return
    }
    if (blong) {
        params = {blong}
    } else {
        params = {}
    }
    users.find(params, {pwd: 0}).sort({_id: -1, type}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: '查询出错',
                ret: true
            })
        } else if (data == null || data.length == 0) {
            res.json({
                data,
                code: 400,
                msg: '你输入的参数有误',
                ret: true
            })
        } else {
            res.json({
                data,
                code: 200,
                msg: 'success',
                ret: true
            })
        }

    })
});

router.post('/getOne', (req, res) => {
    let userId = req.session.user.userId;
    users.find({userId}, {pwd: 0}, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: '查询出错',
                ret: true
            })
        } else if (data == null || data.length == 0) {
            res.json({
                data,
                code: 400,
                msg: '你输入的参数有误',
                ret: true
            })
        } else {
            res.json({
                data,
                code: 200,
                msg: 'success',
                ret: true
            })
        }

    })
});

router.post('/add', (req, res) => {
    let {name, userId, homeAddress, workAddress, nation, weixin, qq, sex, highestDeg, title, wage, createTime, lastTime, type, blong, pwd, level} = req.body;
    if (!userId || userId == null) {
        res.json({
            data: "false",
            code: 500,
            msg: "身份证不能为空",
            ret: false
        });
        return;
    } else if (!name || name == null) {
        res.json({
            data: "false",
            code: 500,
            msg: "用户名不能为空",
            ret: false
        });
        return;
    }
    if (pwd) {
        pwd = md5(pwd)
    }
    let params = {
        name,
        userId,
        homeAddress,
        workAddress,
        nation,
        weixin,
        qq,
        sex,
        highestDeg,
        title,
        wage,
        createTime,
        lastTime,
        type,
        blong,
        pwd,
        level
    };
    users.findOne({userId}, (err, dt) => {
        if (err) {
            res.json({
                data: err,
                code: 500,
                msg: "后台出错了",
                ret: false
            })
        } else if (dt == null) {
            users.create(params, (err, data) => {
                if (err) {
                    res.json({
                        data,
                        code: 500,
                        msg: "失败",
                        ret: false
                    })
                } else {
                    console.log(data);
                    res.json({
                        data,
                        code: 200,
                        msg: "添加成功",
                        ret: true
                    })
                }
            })
        } else {
            res.json({
                data: dt,
                code: 400,
                msg: "此用户已经存在",
                ret: false
            })
        }
    });

});

router.post('/del', (req, res) => {
    let {id} = req.body;
    let pwd = md5(123456);
    users.update({_id: {$in: id}}, {$set: {pwd}}, {multi: true}, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: "失败",
                ret: false
            });
            return;
        }
        if (data.n == 0) {
            res.json({
                data: "重置密码失败",
                code: 400,
                msg: "重置密码失败",
                ret: false
            });
            return;
        } else {
            res.json({
                data,
                code: 200,
                msg: "重置密码成功",
                ret: true
            });
            return;
        }
    })

});

router.post('/update', (req, res) => {
    let {img, name, homeAddress, workAddress, nation, weixin, qq, sex, highestDeg, title, wage, createTime, lastTime, type,} = req.body;
    let params = {
        img,
        name,
        homeAddress,
        workAddress,
        nation,
        weixin,
        qq,
        sex,
        highestDeg,
        title,
        wage,
        createTime,
        lastTime,
        type
    };
    let userId = req.session.user.userId;
    users.update({userId}, {$set: params}, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: "失败",
                ret: true
            })
        }
        if (data.n == 0) {
            res.json({
                data,
                code: 400,
                msg: "修改失败",
                ret: false
            })
        }
        else {
            users.findOne({userId}, (err, dt) => {
                if (err) {
                    res.json({
                        data: err,
                        code: 500,
                        msg: "后台出错了",
                        ret: false
                    })
                } else if (dt == null) {
                    res.json({
                        dt,
                        code: 400,
                        msg: "获取出错",
                        ret: false
                    })
                } else {
                    req.session.user = dt;
                    thinking.update({userId}, {$set: {name}}, {multi: true}).then(date1 => {
                        card.update({userId}, {$set: {userName:name,userImg:img}}, {multi: true}).then(data2 => {
                            summarize.update({userId}, {$set: {userName:name}}, {multi: true}).then(data3 => {
                                card.update({toUserId: userId}, {$set: {toUserName: name}}, {multi: true}).then(data4 => {
                                    res.json({
                                        data: '修改成功',
                                        code: 200,
                                        msg: "修改成功",
                                        ret: true
                                    })
                                })
                            })
                        })
                    });
                }
            });
        }
    })

});

router.post('/logging', (req, res) => {
    let {logging, _id} = req.body;
    users.update({_id}, {$set: {logging}}, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: "失败",
                ret: true
            })
        }
        if (data.n == 0) {
            res.json({
                data,
                code: 400,
                msg: "修改失败",
                ret: false
            })
        }
        else {

            res.json({
                data,
                code: 200,
                msg: "修改成功",
                ret: true
            })
        }
    })

});

module.exports = router;