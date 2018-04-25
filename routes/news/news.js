var express = require('express');
var router = express.Router();
var news = require('../../database/model/new');
var score = require('../../database/model/score');

router.post('/get', (req, res) => {
    let {page = 1, rows = 5, type, id,} = req.body;
    let params = {};
    if (id == null && type != null) {
        params = {type}
    } else if (id == null && type == null) {
        params = {}
    } else {
        params = {_id: id}
    }
    news.find(params).sort({_id: 1}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: '查询出错',
                ret: false
            })
        }
        if (data == null || data.length == 0) {
            res.json({
                data,
                code: 500,
                msg: '你输入的参数有误',
                ret: false
            })
        }
        else {
            news.count(params, (err, newData) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    if (req.session.user && id) {
                        let userId = req.session.user.userId;
                        let typeName = data[0].type;
                        let createTime = Number(new Date());
                        score.create({userId, type: 2, typeName, score: 1, createTime}, (err, da) => {
                            if (err) {
                                res.json({
                                    data: "积分出错",
                                    msg: "失败",
                                    code: 500,
                                    ret: false
                                });
                                return
                            }
                        });
                    }
                    res.json({
                        data,
                        num: newData,
                        code: 200,
                        msg: 'success',
                        ret: true
                    })
                }
            });
        }

    })
});
router.post('/getOne', (req, res) => {
    let {id} = req.body;
    news.find({_id: id}, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: '查询出错',
                ret: false
            })
        }
        if (data == null || data.length == 0) {
            res.json({
                data,
                code: 500,
                msg: '你输入的参数有误',
                ret: false
            })
        }
        else {
            console.log(data[0]);
            console.log(data[0].count);
            let count = (data[0].count) + 1;
            console.log(count);
            news.update({_id: id}, {$set: {count}}, (err, newData) => {
                if (err) {
                    res.json({
                        data,
                        code: 500,
                        msg: '查询出错',
                        ret: false
                    })
                } else if (newData.n == 0) {
                    res.json({
                        data: "失败",
                        code: 5,
                        msg: '失败',
                        ret: false
                    })
                } else {
                    res.json({
                        data,
                        num: newData,
                        code: 200,
                        msg: 'success',
                        ret: true
                    })
                }
            });
        }

    })
});

router.post('/add', (req, res) => {
    let {title, img, content, contentText, type} = req.body;
    news.create({img, title, content, contentText, type, createTime: (new Date()).toLocaleString()}, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                data,
                code: 200,
                msg: "添加成功",
                ret: true
            })
        }
    })

});
router.post('/del', (req, res) => {
    let {_id} = req.body;
    // console.log(req.body);
    news.remove({_id}, (err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: "失败",
                ret: true
            })
        }
        if (data.n == 1) {
            res.json({
                data,
                code: 200,
                msg: "删除成功",
                ret: true
            })
        } else {
            res.json({
                data,
                code: 400,
                msg: "不存在的id",
                ret: false
            })
        }
    })

});
router.post('/update', (req, res) => {
    let {title, img, content, contentText, type, id} = req.body
    news.update({_id: id}, {
        $set: {
            img,
            title,
            content,
            contentText,
            type,
            updateTime: (new Date()).toLocaleString()
        }
    }, (err, data) => {
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