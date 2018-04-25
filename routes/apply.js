var express = require('express');
var router = express.Router();
var apply = require('../database/model/apply');

router.post('/add', (req, res) => {
    let {userId, img,name,birthday} = req.body;
    apply.create({userId, img, name,birthday}, (err, data) => {
            if(err){
                res.json({
                    data:err,
                    msg:'后台错了',
                    code:500,
                    ret:false
                });
                return;
            }
            if (data==null){
                res.json({
                    data,
                    msg:'前台错了',
                    code:400,
                    ret:false
                });
                return;
            } else{
                res.json({
                    data:"success",
                    msg:'申请书提交成功',
                    code:200,
                    ret:true
                });
                return;
            }
    });
});

router.post('/get', (req, res) => {
    let {userId} = req.body;
    apply.findOne({userId}, (err, data) => {
        if(err){
            res.json({
                data:err,
                msg:'后台错了',
                code:500,
                ret:false
            });
            return;
        }
        if (data==null){
            res.json({
                data,
                msg:'前台错了',
                code:400,
                ret:false
            });
            return;
        } else{
            res.json({
                data,
                msg:"success",
                code:200,
                ret:true
            });
            return;
        }
    });
});

module.exports = router;