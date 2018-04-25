var express = require('express');
var router = express.Router();
var fengcai = require('../database/model/fengcai');

router.post('/get', (req, res) => {
    let {page = 1, rows = 5, id,} = req.body;
    let params = {};
    if (id == null) {
        rows=Number(rows);
        page=Number(page);
        params = {}
    } else {
        params = {_id: id}
    }
    fengcai.find(params).sort({_id: 1}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
        if (err) {
            res.json({
                data,
                code: 500,
                msg: '查询出错',
                ret: true
            })
        }
        if (data == null || data.length == 0) {
            res.json({
                data,
                code: 500,
                msg: '你输入的参数有误',
                ret: true
            })
        }
        else {
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
    let {fileName, type, dsc, pic} = req.body;
    fengcai.create({fileName, dsc, pic, type}, (err, data) => {
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
    let {id} = req.body;
    fengcai.remove({_id:id}, (err, data) => {
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
    let {fileName, type, dsc, pic,id} = req.body
    fengcai.update({_id: id}, {$set: {fileName, type, dsc, pic,}}, (err, data) => {
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