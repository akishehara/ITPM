const mongoose=require('mongoose');
const Schema=mongoose.Schema

const ReviewSchema=new Schema({
    Review:{
        type:String,  
    },
    Shop_id:{
        type:String
    },
    Customer_Name:{
        type:String
    },
    star:{
        type:String
    }
})

const Owner=mongoose.model('Review',ReviewSchema)
module.exports=Owner