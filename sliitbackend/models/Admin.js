const mongoose=require('mongoose');
const Schema=mongoose.Schema

const adminSchema=new Schema({
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

const Admin=mongoose.model('Admin',adminSchema)
module.exports=Admin