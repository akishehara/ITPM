const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Item = require('../models/Item');
const multer = require('multer');
const cloudinaryUpload = require('../utils/Cloudinary');

// Set up multer for file upload
const createItem = async (req, res, next) => {
    const { image } = req.files;
    const { shop_id, Price, Name, Description } = req.body;

    // Set up options for Cloudinary upload
    const opts = {
        overwrite: true,
        invalidate: true,
        resource_type: 'auto',
    };

    try {
        // Upload the image to Cloudinary
        const result = await cloudinaryUpload.uploader.upload(image.tempFilePath, {
            folder: 'shops',
            width: 300,
            resource_type: 'auto',
        });

        // Create a new shop with the image URL returned from Cloudinary
        const shop = await Item.create({
            image: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            shop_id,
            Price,
            Name,
            Description
        });

        // Send a success response
        res.status(201).json({ success: true });
    } catch (err) {
        // Handle any errors that occur during the process
        console.log(err);
        res.status(500).json({ success: false, message: 'Error creating shop' });
    }
};

const findItemShopWise = (req, res, next) => {
    var name = req.body.shop_id;
    console.log() 
    Item.find({ shop_id: name })
        .then(users => {
            if (users.length > 0) {
                res.json({
                    message: 'found users with the same name',
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

const getItem = (req, res, next) => {
    var name = req.params.id;
    console.log(name) 
    Item.findOne({_id:name})
        .then(users => {
            if (users) {
                res.json({
                    message: 'found users with the same name',
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




module.exports = {
    createItem, findItemShopWise,getItem
};
