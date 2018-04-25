var mongoose=require('mongoose');

var news=new mongoose.Schema({
    title:{
        type:String
    },
    img:{
        type:String
    },
    createTime:{
        type:String
    },
    updateTime: {
        type: String
    },
    content:{
        type:String
    },
    type:{
        type:Number
    },
    contentText:{
        type:String
    },
    count:{
        type:Number,
        default:0
    }
},{versionKey:false});

module.exports=mongoose.model('news',news,'news');