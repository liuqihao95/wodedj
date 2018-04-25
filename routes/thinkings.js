var express = require('express');
var router = express.Router();
var thinking = require('../database/model/thinking');
var user = require('../database/model/user');

router.post('/add', (req, res) => {
    let {img} = req.body;
    let state = 0;
    let userId = req.session.user.userId;
    let name = req.session.user.name;
    thinking.create({userId, img, state,name}, (err, data) => {
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
                msg: '思想汇报添加成功',
                code: 200,
                ret: true
            });
            return;
        }
    });
});

router.post('/get', (req, res) => {
    let {page = 1, rows = 5} = req.body;
    thinking.find({}).sort({_id: -1}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
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
            thinking.count({}, (err, num) => {
                if (err) {
                    res.json({
                        data,
                        msg: "失败",
                        code: 500,
                        ret: false
                    });
                    return;
                } else {
                    // console.log(2222)
                    // data.forEach(val => {
                    //     let userId = val.userId;
                    //     // let obj= new Promise((resolve, reject)=> {
                    //     user.findOne({userId}).then(dt => {
                    //         console.log(dt);
                    //         val.name = dt.name
                    //     }).catch(err => {
                    //           console.log(err)
                    //     })
                    //     // });
                    //     //  obj.then(dt => {
                    //     //
                    //     //      console.log(val.name);
                    //     //      resolve( val.name=dt[0].name)
                    //     //  });
                    //     //  obj.catch(err=>{
                    //     //      resolve(err)
                    //     // })
                    // });
                    res.json({
                        data,
                        num: num,
                        msg: "success",
                        code: 200,
                        ret: true
                    });
                    return;
                }
            })
        }
    })
});

router.post('/getOne', (req, res) => {
    let {page = 1, rows = 5} = req.body;
    let userId = req.session.user.userId;
    thinking.find({userId}).sort({_id: -1}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
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
            thinking.count({}, (err, num) => {
                if (err) {
                    res.json({
                        data,
                        msg: "失败",
                        code: 500,
                        ret: false
                    });
                    return;
                } else {
                    res.json({
                        data,
                        num: num,
                        msg: "success",
                        code: 200,
                        ret: true
                    });
                    return;
                }
            })
        }
    })
});

router.post('/getState', (req, res) => {
    let {id} = req.body;
    thinking.findOne({_id: id}, (err, data) => {
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
                msg: "你的参数出错了",
                code: 400,
                ret: false
            });
            return;
        } else {
            res.json({
                data: data.state,
                msg: "success",
                code: 200,
                ret: true
            });
            return;
        }
    })
});

router.post('/update', (req, res) => {
    let {id, state} = req.body;
    thinking.update({_id: {$in: id}}, {$set: {state}}, {multi: true}, (err, data) => {
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
                data: "success",
                msg: "修改成功",
                code: 200,
                ret: true
            });
            return;
        }
    })
});

router.post('/updateOne', (req, res) => {
    let {id, state, reason} = req.body;
    let passTime = Number(new Date());
    thinking.update({_id: {$in: id}}, {$set: {state, reason, passTime}}, {multi: true}, (err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "后台出错了",
                code: 500,
                ret: false
            });
            return;
        }
        if (data.n == 0) {
            res.json({
                data,
                msg: "前台出错了",
                code: 400,
                ret: false
            });
            return;
        } else {
            res.json({
                data: '修改成功',
                msg: "success",
                code: 200,
                ret: true
            });
            return;
        }
    })
});


router.post('/del', (req, res) => {
    let {id} = req.body;
    thinking.remove({_id: id}, (err, data) => {
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