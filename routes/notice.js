var express=require('express');
var router=express.Router();
var notices=require('../database/model/notice');

router.post('/add',(req,res)=>{
    let {title,author,content,contentText}=req.body;
    let createTime=(new Date()).toLocaleString();
    let params={title,author,content,contentText,createTime};

    notices.create(params,(err,data)=>{
        console.log(data);
        if (err){
            res.json({
                data,
                msg:"后台出错了",
                code:500,
                ret:false
            });
            return;
        }
        if (data==null){
            res.json({
                data,
                msg:"前台出错了",
                code:400,
                ret:false
            });
            return;
        }else {
                res.json({
                    data:'添加成功',
                    msg:"success",
                    code:200,
                    ret:true
                });
                return;
        }
    })
});

router.post('/get', (req, res) => {
    let {page=1, rows=5,id} = req.body;
    let params={};
    if(id==null){
        page = Number(page);
        rows = Number(rows);
        params={}
    }else{
        params={_id:id}
    }
    notices.find(params).sort({_id:-1}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
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
                data,
                msg: "success",
                code: 200,
                ret: true
            });
            return;
        }
    })
});

router.post('/update',(req,res)=>{
    let {title,author,content,contentText,id}=req.body;
    let params={title,author,content,contentText};
    notices.update({_id:id},params,(err,data)=>{
        if (err){
            res.json({
                data,
                msg:"后台出错了",
                code:500,
                ret:false
            });
            return;
        }
        if (data.n==0){
            res.json({
                data,
                msg:"前台出错了",
                code:400,
                ret:false
            });
            return;
        }else {
            res.json({
                data:'修改成功',
                msg:"success",
                code:200,
                ret:true
            });
            return;
        }
    })
});

router.post('/del',(req,res)=>{
    let {id}=req.body;
    notices.remove({_id:id},(err,data)=>{
        if (err){
            res.json({
                data,
                msg:"后台出错了",
                code:500,
                ret:false
            });
            return;
        }
        if (data.n==0){
            res.json({
                data,
                msg:"ID不存在",
                code:400,
                ret:false
            });
            return;
        }else {
            res.json({
                data:'删除成功',
                msg:"success",
                code:200,
                ret:true
            });
            return;
        }
    })
});


module.exports=router;