const mongoose=require('mongoose');
const Schema=mongoose.Schema

const ownerSchema=new Schema({
    id:{
        type:Number,  
    },
    Email:{
        type:String
    },
    Name:{
        type:String
    },
    Phone:{
        type:String
    },
    Password:{
        type:String
    },
})

const Owner=mongoose.model('Owner',ownerSchema)
module.exports=Owner