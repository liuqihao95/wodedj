let express = require('express');
let router = express.Router();
let discuss = require('../database/model/discuss');

router.post('/add', (req, res) => {
    let {title, content} = req.body;
    discuss.create({title, content}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "后台出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data == null) {
            res.json({
                data,
                msg: "你出错了",
                code: 400,
                ret: false
            });
        }
        else {
            res.json({
                data,
                msg: "民主评议上传成功",
                code: 200,
                ret: true
            })
        }
    })

});

router.get('/get', (req, res) => {//管理员获得民主评议
    let {id} = req.query;
    let params = {}
    if (id == null) {
        params = {}
    } else {
        params = {_id: id}
    }
    discuss.find(params, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data == null || data.length === 0) {
            res.json({
                data,
                msg: "没有评议或者你的参数出错",
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


router.get('/getDiscuss', (req, res) => {//用户获得民主评议
    discuss.findOne({state: 1}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data == null) {
            res.json({
                data,
                msg: "没有开启的评议",
                code: 200,
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

router.post('/update', (req, res) => {//更改评议的状态
    let {id, state} = req.body;
    if (state == 1) {
        discuss.findOne({state: 1}, (err, data) => {//开启评议
            if (err) {
                res.json({
                    data: err,
                    msg: "出错了",
                    code: 500,
                    ret: false
                });
                return;
            }
            if (data == null) {
                discuss.update({_id: id}, {$set: {state}}, (err, data) => {
                    if (err) {
                        res.json({
                            data: err,
                            msg: "出错了",
                            code: 500,
                            ret: false
                        });
                    } else if (data == null) {
                        res.json({
                            data: "评议开启失败",
                            msg: "评议开启失败",
                            code: 400,
                            ret: false
                        });
                    } else {
                        res.json({
                            data: '评议开启成功',
                            msg: "评议开启成功",
                            code: 200,
                            ret: true
                        });
                    }
                })

            } else {
                res.json({
                    data: '评议只能开启一个',
                    msg: "评议只能开启一个",
                    code: 400,
                    ret: false
                });
            }
        })
    }
    else {
        discuss.update({_id: id}, {$set: {state}}, (err, data) => {
            if (err) {
                res.json({
                    data: err,
                    msg: "出错了",
                    code: 500,
                    ret: false
                });
            } else if (data == null) {
                res.json({
                    data: "评议关闭失败",
                    msg: "评议关闭失败",
                    code: 400,
                    ret: false
                });
            } else {
                res.json({
                    data: '评议关闭成功',
                    msg: "评议关闭成功",
                    code: 200,
                    ret: true
                });
            }
        })
    }
});

router.post('/updateOne', (req, res) => {//更改评议
    let {id, content,title} = req.body;
    discuss.update({_id: id}, {$set: {content,title}}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
        } else if (data == null) {
            res.json({
                data: "评议修改失败",
                msg: "评议修改失败",
                code: 400,
                ret: false
            });
        } else {
            res.json({
                data: '评议修改成功',
                msg: "评议修改成功",
                code: 200,
                ret: true
            });
        }
    })
});


module.exports = router;