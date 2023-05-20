const express=require('express')
const router=express.Router()

const ServiceController=require('../controller/ServiceController')

router.post('/serviceRegister',ServiceController.registerService)
router.get('/service/:id',ServiceController.getServicesByOwnerId)
router.get('/allServices',ServiceController.findAllServices)
router.get('/getAService/:id',ServiceController.getAService)
router.get('/locateMeg/:id',ServiceController.getGarageByDistrict)
router.delete('/service/:id',ServiceController.deleteStation)
router.put('/service/:id',ServiceController.updateService);

module.exports=router