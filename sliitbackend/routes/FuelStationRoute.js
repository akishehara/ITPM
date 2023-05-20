const express=require('express')
const router=express.Router()

const FuelStationContorller=require('../controller/FuelStationController')

router.post('/fuelStation',FuelStationContorller.registerFuelStation)
router.get('/fuelStation',FuelStationContorller.findAllStation)
router.delete('/fuelStation/:id',FuelStationContorller.deleteStation)
router.get('/fuelStationGetOne/:id',FuelStationContorller.getFuelStation)
router.put('/fuelStationGetOne/:id',FuelStationContorller.updateFuelStation)
router.get('/locateMe/:id',FuelStationContorller.getFuelStationByDistrict);
module.exports=router