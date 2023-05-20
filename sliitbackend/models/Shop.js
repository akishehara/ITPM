const mongoose = require('mongoose');
const Schema = mongoose.Schema

const shopSchema = new Schema({
    image: {
        public_id: {
            type:String
        },
        url: {
            type:String
        }
    },
    title:{
        type:String
    },
    province:{
        type:String
    },
    district:{
        type:String
    },
    ownerId:{
        type:String
    }
    ,type:{
        type:String
    }
})

const Shop = mongoose.model('Shop', shopSchema)
module.exports = Shop