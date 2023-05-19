const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Review = require('../models/Review')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const registerReview = (req, res, next) => {
    let service = new Review({
        Review: req.body.Review,
        Shop_id: req.body.Shop_id,
        Customer_Name:req.body.Customer_Name,
        star:req.body.star
    })
    service.save().then(user => {
        res.json({
            massage: "Review added"
        })
    })
        .catch(error => {
            res.json({
                massage: error
            })
        })
}
const getReviewByShop = (req, res, next) => {
    var name = req.params.id;
    console.log()
    Review.find({
        Shop_id: name
    })
        .then(users => {
            if (users.length > 0) {
                res.json({
                    message: 'found reviews with the same name',
                    users: users
                });
            } else {
                res.json({
                    message: 'no users with the same name found'
                });
            }
        })
        .catch(err => {
            res.json({
                error: err
            });
        });

}
const deleteReview = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Review.findOneAndDelete({ _id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send("Fuel station deleted successfully");
    } catch (err) {
        // Handle errors here
    }
};

const updateReview = async (req, res, next) => {
    const itemId = req.params.id;
    const updatedItem = req.body; 
    console.log(req.body)
    try {
      const result = await Review.findOneAndUpdate({_id: itemId }, updatedItem, { new: true });
      if (!result) {
        return res.status(404).send("Fuel station not found");
      }
      return res.status(200).send(result);
    } catch (err) {
      // Handle errors here
      next(err);
    }
  }
  
module.exports = {
    registerReview, getReviewByShop,deleteReview,updateReview
};