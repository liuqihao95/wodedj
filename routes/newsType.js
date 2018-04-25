var express = require('express');
var router = express.Router();
var newsType = require('../database/model/newsType');

router.post('/add', (req, res) => {
    let {title, img, num} = req.body;
    newsType.create({title, img, num}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: '后台错了',
                code: 500,
                ret: false
            });
            return;
        }
        if (data == null) {
            res.json({
                data,
                msg: '前台错了',
                code: 400,
                ret: false
            });
            return;
        } else {
            res.json({
                data: "success",
                msg: '新闻分类添加成功',
                code: 200,
                ret: true
            });
            return;
        }
    });
});

router.post('/get', (req, res) => {
    let {id} = req.body;
    let params = {};
    if (id == null) {
        params = {}
    } else {
        params = {_id: id}
    }
    newsType.find(params,(err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data == null || data.length == 0) {
            res.json({
                data,
                msg: "你的参数出错了",
                code: 400,
                ret: false
            });
            return;
        } else {
            res.json({
                data,
                msg: "success",
                code: 200,
                ret: true
            });
            return;
        }
    })
});

router.post('/update', (req, res) => {
    let {id,img,num,title} = req.body;
    newsType.update({_id:id},{$set:{img,num,title}},{multi:true},(err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data == null||data.length==0) {
            res.json({
                data,
                msg: "你的参数出错了",
                code: 400,
                ret: false
            });
            return;
        } else {
            res.json({
                data:"success",
                msg: "修改成功",
                code: 200,
                ret: true
            });
            return;
        }
    })
});

router.post('/del', (req, res) => {
    let {_id} = req.body;
    console.log(_id);
    newsType.remove({_id}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data.n == 0) {
            res.json({
                data,
                msg: "你的参数出错了",
                code: 400,
                ret: false
            });
            return;
        } else {
            res.json({
                data: "删除成功",
                msg: "success",
                code: 200,
                ret: true
            });
            return;
        }
    })
});


module.exports = router;