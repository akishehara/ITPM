const mongoose=require('mongoose');
const Schema=mongoose.Schema

const ServiceSchema=new Schema({
    owner_id:{
        type:String,  
    },
    owner_email:{
        type:String
    },
    SName:{
        type:String
    },
    CName:{
        type:String
    },
    ServiceType:{
        type:String
    },
    province:{
        type:String
    },
    district:{
        type:String
    }
})

const FuelStation=mongoose.model('Service',ServiceSchema)
module.exports=FuelStation