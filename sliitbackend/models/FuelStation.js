const mongoose=require('mongoose');
const Schema=mongoose.Schema

const FuelStationSchema=new Schema({
    id:{
        type:String,  
    },
    Name:{
        type:String
    },
    CompanyName:{
        type:String
    },
    Province:{
        type:String
    },
    District:{
        type:String
    }
})

const FuelStation=mongoose.model('FuelStation',FuelStationSchema)
module.exports=FuelStation