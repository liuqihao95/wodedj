const express = require('express');
const router = express.Router();
const summarizes = require('../database/model/summarize');

router.post('/add', (req, res) => {//用户添加个人总结
    let {discussId, pic} = req.body;
    let userId = req.session.user.userId;
    let userName = req.session.user.name;
    let blong = req.session.user.blong;
    summarizes.findOne({discussId, userId}, (err, dt) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
        } else if (dt == null) {
            summarizes.create({discussId, pic, userName, userId, blong, common: []}, (err, data) => {
                if (err) {
                    res.json({
                        data: err,
                        msg: "后台出错了",
                        code: 500,
                        ret: false
                    });
                }
                else if (data == null) {
                    res.json({
                        data: '创建失败',
                        msg: "创建失败",
                        code: 400,
                        ret: false
                    });
                }
                else {
                    res.json({
                        data: "success",
                        msg: "success",
                        code: 200,
                        ret: true
                    });
                }
            })
        } else {
            res.json({
                data: "总结不许重复提交",
                msg: "总结不许重复提交",
                code: 400,
                ret: false
            });
        }
    });

});

router.post('/get', (req, res) => {//管理员获得个人总结
    let {page = 1, rows = 5, blong, id, discussId} = req.body;
    let params = blong ? {blong} : {};
    if (id) {
        summarizes.findOne({_id: id}, (err, data) => {
            if (err) {
                res.json({
                    data: err,
                    msg: "后台出错了",
                    code: 500,
                    ret: false
                });
            }
            else if (data == null) {
                res.json({
                    data: '获得失败',
                    msg: "获得失败",
                    code: 400,
                    ret: false
                });
            }
            else {
                res.json({
                    data,
                    msg: "success",
                    code: 200,
                    ret: true
                });
            }
        })
    } else if (discussId) {
        summarizes.find({discussId}).sort({_id: -1}).limit(rows).skip((page - 1) * rows).exec((err, data) => {
            if (err) {
                res.json({
                    data: err,
                    msg: "出错了",
                    code: 500,
                    ret: false
                });
            }
            else if (data == null || data.length === 0) {
                res.json({
                    data,
                    msg: "你的参数出错了",
                    code: 400,
                    ret: false
                });
            } else {
                summarizes.count(params, (err, num) => {
                    if (err) {
                        res.json({
                            data: err,
                            msg: "success",
                            code: 500,
                            ret: false
                        });
                    } else {
                        res.json({
                            data,
                            num,
                            msg: "success",
                            code: 200,
                            ret: true
                        });
                    }
                })
            }
        })
    }
    else {
        summarizes.find(params).sort({_id: -1}).limit(rows).skip((page - 1) * rows).exec((err, data) => {
            if (err) {
                res.json({
                    data: err,
                    msg: "出错了",
                    code: 500,
                    ret: false
                });
            }
            else if (data == null || data.length === 0) {
                res.json({
                    data: "你的参数出错了",
                    msg: "你的参数出错了",
                    code: 400,
                    ret: false
                });
            } else {
                summarizes.count(params, (err, num) => {
                    if (err) {
                        res.json({
                            data: err,
                            msg: "success",
                            code: 500,
                            ret: false
                        });
                    } else {
                        res.json({
                            data,
                            num,
                            msg: "success",
                            code: 200,
                            ret: true
                        });
                    }
                })
            }
        })

    }
});

router.post('/update', (req, res) => {//审核个人总结
    let {id, state, reason} = req.body;
    summarizes.update({_id: id}, {$set: {state, reason}}, (err, data) => {
        if (err) {
            res.json({
                data,
                msg: "后台出错了",
                code: 500,
                ret: false
            });
        } else if (data.n === 0) {
            res.json({
                data: 'ID不存在',
                msg: "ID不存在",
                code: 400,
                ret: false
            });
        } else {
            res.json({
                data: '审核成功',
                msg: "success",
                code: 200,
                ret: true
            });
        }
    })
});

// 用户获取他人的个人总结
router.post("/getOther", (req, res, next) => {
    let {discussId, otherUserId} = req.body;
    summarizes.findOne({discussId, userId: otherUserId, state: 1}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "后台出错",
                code: 500,
                ret: false
            });
        } else if (data == null) {
            res.json({
                data: "用户信息没有完善",
                msg: "用户信息没有完善",
                code: 400,
                ret: false
            });
        } else {
            res.json({
                data,
                msg: "success",
                code: 200,
                ret: true
            });
        }
    })
});

router.post('/addSummary', (req, res) => {//用户进行评议
    let {id, content} = req.body;
    let userId = req.session.user.userId;
    summarizes.findOne({_id:id,"common.userId": userId}, (err, data) => {
        console.log(data);
        if (err) {
            res.json({
                data: err,
                msg: "后台出错",
                code: 501,
                ret: false
            });
        } else if (data == null) {
            summarizes.update({_id: id}, {$push: {common: {userId, content}}}, (err, dt) => {
                if (err) {
                    res.json({
                        data: err,
                        msg: "后台出错了",
                        code: 500,
                        ret: false
                    });
                } else if (dt.n === 0) {
                    res.json({
                        data: "不存在ID",
                        msg: "不存在ID",
                        code: 400,
                        ret: false
                    });
                } else {
                    res.json({
                        data: '评论成功',
                        msg: "success",
                        code: 200,
                        ret: true
                    });
                }
            })

        } else {
            res.json({
                data: "不允许重复评论",
                msg: "不允许重复评论",
                code: 400,
                ret: false
            });
        }
    });
});

module.exports = router;