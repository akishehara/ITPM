const express=require('express')
const router=express.Router()
const ReviewController=require('../controller/ReviewController')
router.post('/review',ReviewController.registerReview)
router.get('/review/:id',ReviewController.getReviewByShop)
router.delete('/:id',ReviewController.deleteReview)
router.put('/:id',ReviewController.updateReview)
module.exports=router 