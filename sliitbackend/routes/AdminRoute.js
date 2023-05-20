const express=require('express')
const router=express.Router()

const AdminController=require('../controller/AdminController')

router.post('/admin',AdminController.registerAdmin)

router.post('/adminLogin',AdminController.loginAdmin);

module.exports=router