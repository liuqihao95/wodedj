var express = require('express');
var router = express.Router();
var map = require('../database/model/map');

router.get('/get', (req, res) => {
    map.find({},(err, data) => {
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
                msg: '你输入的参数有误或者数据库没有',
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
    let {longitude, latitude} = req.body;
    map.create({longitude, latitude}, (err, data) => {
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


module.exports = router;