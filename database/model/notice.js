var mongose=require('mongoose');

var notices=new mongose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    contentText:{
        type:String
    },
    author:{
        type:String
    },
    createTime:{
        type:String
    }
},{versionKey:false});

module.exports=mongose.model("notices",notices,"notices");