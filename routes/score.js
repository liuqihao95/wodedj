var express = require('express');
var router = express.Router();
var score = require('../database/model/score');

router.post('/get', (req, res) => {
    let userId = req.session.user.userId;
    score.find({userId},(err, data) => {
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

module.exports = router;