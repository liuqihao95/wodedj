var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hhdj');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("mongoose数据库连接成功")
});
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/didi');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     // we're connected!
//     console.log("mongoose数据库连接成功")
// });