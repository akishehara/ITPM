const mongoose = require('mongoose')
//const bcrypt = require('bycrypt')

const userSchema = mongoose.Schema(
    {
        name: {

            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            //just in case we need
            type: Boolean,
            required: true,
            default: false,    
        },
        pic: {
            type: String,
            required: true,
        }
    },
    {
        timestapms: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
