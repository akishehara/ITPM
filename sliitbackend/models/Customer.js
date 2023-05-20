const mongoose=require('mongoose');
const Schema=mongoose.Schema

const customerSchema=new Schema({
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

const Customer=mongoose.model('Customer',customerSchema)
module.exports=Customer