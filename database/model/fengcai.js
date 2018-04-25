var mongoose=require('mongoose');

var fengcais=new mongoose.Schema({
    fileName:{
        type:String
    },
    type:{
        type:String
    },
    dsc:{
        type:String
    },
    pic:{
        type:String
    },
},{versionKey:false});

module.exports=mongoose.model('fengcais',fengcais,'fengcais');