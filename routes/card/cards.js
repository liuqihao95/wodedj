var express = require('express');
var router = express.Router();
var cards = require('../../database/model/card');

router.post('/add', (req, res) => {
    let {content} = req.body;
    let {userId, img, name} = req.session.user;

    cards.create({userId, content, userName: name, userImg: img}, (err, data) => {
        if (err) {
            res.json({
                data: 'err',
                msg: 'err',
                code: 500,
                ret: false
            })
        } else if (data == null) {
            res.json({
                data: "用户不存在",
                msg: '用户不存在',
                code: 400,
                ret: false
            })
        } else {
            res.json({
                data,
                msg: '帖子发布成功',
                code: 200,
                ret: true
            })
        }
    })
});

router.post('/get', (req, res) => {
    let {id,page = 1, rows = 5,} = req.body;
    let params = {};
    if (!id || id == null) {
        params = {isParent:0};
    } else {
        params = {_id: id};
    }
    cards.find(params).sort({_id: -1}).skip((page - 1) * rows).limit(rows).exec((err, data) => {
        if (err) {
            res.json({
                data: err,
                msg: "出错了",
                code: 500,
                ret: false
            });
        } else if (data == null || data.length == 0) {
            res.json({
                data,
                msg: "你的参数出错了或者没哟帖子",
                code: 400,
                ret: false
            });
        } else {
            cards.count({}, (err, num) => {
                if (err) {
                    res.json({
                        data: err,
                        msg: "出错了",
                        code: 500,
                        ret: false
                    });
                } else {
                    res.json({
                        data,
                        num: num,
                        msg: "success",
                        code: 200,
                        ret: true
                    });
                }
            });
        }
    })
});

// router.post('/update', (req, res) => {
//     let {userId, comment, id} = req.body;
//     console.log(req.body);
//     cards.update({_id: id}, {$push: {comment: {userId, comment}}}, (err, data) => {
//         console.log(data);
//         if (err) {
//             res.json({
//                 data: 'err',
//                 msg: 'err',
//                 code: 500,
//                 ret: false
//             })
//             return;
//         }
//         if (data.n == 0) {
//             res.json({
//                 data: "用户不存在",
//                 msg: '用户不存在',
//                 code: 400,
//                 ret: false
//             });
//             return;
//         }
//         else {
//             res.json({
//                 data: "对帖子评论成功",
//                 msg: '对帖子布评论成功',
//                 code: 200,
//                 ret: true
//             })
//         }
//         return;
//     })
// });

router.post('/del', (req, res) => {
    let {_id} = req.body;
    cards.remove({_id}, (err, data) => {
        console.log(data);
        if (err) {
            res.json({
                data: 'err',
                msg: 'err',
                code: 500,
                ret: false
            })
        } else if (data.n == 0) {
            res.json({
                data: "评论不存在",
                msg: '评论不存在',
                code: 400,
                ret: false
            });
        } else {
            res.json({
                data: "删除帖子成功",
                msg: '删除帖子成功',
                code: 200,
                ret: true
            });
        }
    })
});

router.post('/addReply', (req, res) => {
    let {parentId, toUserId, content} = req.body;
    let {userId, img, name} = req.session.user;
    cards.findOne({
        $or: [
            {_id: parentId, userId: toUserId},
            {parentId, userId: toUserId}
        ]
    }, (err, dt) => {
        if (err) {
            res.json({
                data: err,
                msg: 'err',
                code: 500,
                ret: false
            })
        } else if (dt == null) {
            res.json({
                data: "非法参数",
                code: 400,
                msg: "非法参数",
                ret: false
            })
        } else {
            cards.create({
                isParent: 1,
                parentId,
                content,
                toUserId,
                toUserName: dt.userName,
                toUserImg: dt.userImg,
                userId: userId,
                userImg: img,
                userName: name
            }, (err, data) => {
                if (err) {
                    res.json({
                        data: err,
                        msg: 'err',
                        code: 500,
                        ret: false
                    })
                } else if (data == null) {
                    res.json({
                        data: "添加失败",
                        msg: '添加失败',
                        code: 400,
                        ret: false
                    })
                } else {
                    res.json({
                        data: "添加成功",
                        msg: '添加成功',
                        code: 200,
                        ret: true
                    })
                }
            })
        }
    })
});

router.get('/getReply', (req, res) => {
    let {parentId} = req.query;
    cards.find({parentId}, (err, dt) => {
        if (err) {
            res.json({
                data: err,
                msg: 'err',
                code: 500,
                ret: false
            })
        } else if (dt == null||dt.length==0) {
            res.json({
                dt,
                code: 400,
                msg: "非法参数或者没有回复",
                ret: false
            })
        } else {
            res.json({
                dt,
                msg: '获取成功',
                code: 200,
                ret: true
            })
        }
    })
});


module.exports = router;
