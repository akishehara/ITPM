const express=require('express')
const router=express.Router()


const InsuranceControler=require('../controller/InsuranceController')

router.post('/create',InsuranceControler.createInsurance)
router.post('/find',InsuranceControler.findInsurance)
 
module.exports=router