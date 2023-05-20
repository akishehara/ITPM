const mongoose=require('mongoose');
const Schema=mongoose.Schema

const itemSchema=new Schema({
    shop_id:{
        type:String,  
    },
    Name:{
        type:String
    },
    Price:{
        type:String
    },
    Description:{
        type:String
    },
    image: {
        public_id: {
            type:String
        },
        url: {
            type:String
        }
    }
})

const Item=mongoose.model('Item',itemSchema)
module.exports=Item