const express=require('express')
const router=express.Router()

const CustomerController=require('../controller/CustomerController')

router.post('/customer',CustomerController.registerCustomer)

router.post('/customerLogin',CustomerController.loginCustomer);

module.exports=router