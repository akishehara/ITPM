const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Customer = require('../models/Customer')

const registerCustomer = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10, function (err, hash) {
        if (err) {
            res.json({
                error: err
            })
        }
        let customer = new Customer({
            Email: req.body.Email,
            Name: req.body.Name,
            Phone: req.body.Phone,
            Password: hash
        })
        customer.save().then(user => {
            res.json({
                massage: "Customer added"
            })
        })
            .catch(error => {
                res.json({
                    massage: error
                })
            })
    })

}

const loginCustomer = (req, res, next) => { 
    var email = req.body.Email
    var password = req.body.Password
    Customer.findOne({ $or: [{ Email: email }, { Password: password }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password,user.Password,function(err,result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }
                    if(result){
                        res.json({
                            message:'Customer login successfully',
                            data:user
                        })
                    }
                    else{
                        res.json(
                            {
                                message:'Password not matched'
                            }
                        )
                    }
                })
            } else {
                res.json({
                    message: 'no customer'
                })
            }
        })
}

module.exports = {
    registerCustomer,loginCustomer
}