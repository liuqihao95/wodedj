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

router.use('/users', require("../routes/loginAdmin"));

router.use((req, res, next) => {
    if (!req.session.user || req.session.user.level.type !== 0) {
        res.json({
            data: "后台未登录",
            code: 409,
            msg: "后台未登录",
            ret: false
        });
        return;
    } else {
        next();
    }
});

router.use("/", require("./upload"));
router.use('/news', require("../routes/news/news"));
router.use('/users', require("../routes/users/users"));
router.use('/users', require("../routes/loginout"));
router.use('/users', require("../routes/changePwd"));
router.use('/cards', require("../routes/card/cards"));
router.use('/notices', require("../routes/notice"));
router.use('/summarizes', require("../routes/summarizes"));
router.use('/thinking', require("../routes/thinkings"));
router.use('/apply', require("../routes/apply"));
router.use('/newsType', require("../routes/newsType"));
router.use('/fengcai', require("../routes/fengcai"));
router.use('/lunbo', require("../routes/lunbo"));
router.use('/blong', require("../routes/blong"));
router.use('/discuss', require("../routes/discuss"));
router.use('/score', require("../routes/score"));

router.get("/getDate", (req, res, next) => {
    getData().then(data => {
        res.json({
            data,
            mag: '成功',
            code: 200,
            ret: true
        })
    })
})
module.exports = router;