const express=require('express')
const router=express.Router()

const AuthController=require('../controller/AuthController')

router.post('/user',AuthController.register)

router.post('/login',AuthController.login);

router.get('/getOwner/:id',AuthController.getOwnerById);

router.get('/getAll',AuthController.findAllOwner)

module.exports=router