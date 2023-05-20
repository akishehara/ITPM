const express=require('express')
const router=express.Router()


const ShopController=require('../controller/ShopController')

router.post('/create',ShopController.createShop)
router.get('/find',ShopController.findAllShops)
router.get('/findOne/:id',ShopController.getShop)
router.get('/locateMe/:id',ShopController.getShopByDistrict);
router.get('/count/:id',ShopController.getShopByOwner)
router.get('/type/:id',ShopController.getShopByType);
router.delete('/:id',ShopController.deleteShop)
router.put('/:id',ShopController.updateShop);


 
module.exports=router