const {Router} = require("express");
const router = Router();
const session = require('express-session');
const dbConfig = require('../database/config');
const getData = require('./getData')

router.use(
    session({
        secret: "yao",
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 3600 * 1000 * 24 * 30}
    })
);
router.use('/fengcai', require("../routes/fengcai"));
router.use('/apply', require("../routes/apply"));

router.use("/", require("./upload"));
router.use('/news', require("../routes/news/news"));
router.use('/users', require("../routes/login"));
router.use('/notices', require("../routes/notice"));
router.use('/newsType', require("../routes/newsType"));
router.use('/lunbo', require("../routes/lunbo"));
router.use('/map', require("../routes/map"));

router.use('/users',checklogin, require("../routes/login"));
router.use('/users',checklogin, require("../routes/changePwd"));
router.use('/users',checklogin, require("../routes/loginout"));
router.use('/discuss',checklogin, require("../routes/discuss"));
router.use('/score',checklogin, require("../routes/score"));
router.use('/card',checklogin, require("../routes/card/cards"));

router.use('/users', checklogin, require("../routes/users/users"));
router.use('/blong', checklogin, require("../routes/blong"));
router.use('/summarizes', checklogin, require("../routes/summarizes"));
router.use('/thinkings', checklogin, require("../routes/thinkings"));

router.get("/getDate", (req, res, next) => {
    getData().then(data => {
        res.json({
            data,
            mag: '成功',
            code: 200,
            ret: true
        })
    })
});
function checklogin(req, res, next){
    if (!req.session.user) {
        res.json({
            data: "用户未登录",
            code: 401,
            msg: "用户未登录",
            ret: false
        });
    }else{
        next();
    }
}

module.exports = router;