const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
let isAlready;

const registerAdmin = (req, res, next) => {
  Admin.findOne({ Email: req.body.Email }).then(user => {
    if (user) {
      res.status(201).json({
        message: "You cannot register again as an admin."
      });
    } else {
      bcrypt.hash(req.body.Password, 10, function (err, hash) {
        if (err) {
          res.status(500).json({
            error: err
          });
        } else {
          let admin = new Admin({
            Email: req.body.Email,
            Name: req.body.Name,
            Phone: req.body.Phone,
            Password: hash
          });
          admin.save().then(user => {
            res.status(201).json({
              message: "Admin added"
            });
          }).catch(error => {
            res.status(500).json({
              message: error.message || "An error occurred while creating the admin."
            });
          });
        }
      });
    }
  });
};

const loginAdmin = (req, res, next) => {
  var email = req.body.Email
  var password = req.body.Password
  Admin.findOne({ Email: email }).then(user => {
    if (user) {
      bcrypt.compare(password, user.Password, function (err, result) {
        if (err) {
          res.status(500).json({
            error: err
          });
        } else {
          if (result) {
            res.json({
              message: 'Login successful'
            });
          } else {
            res.status(401).json({
              message: 'Incorrect password'
            });
          }
        }
      });
    } else {
      res.status(404).json({
        message: 'No admin with the given email found'
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: error.message || "An error occurred while logging in."
    });
  });
};

module.exports = {
  registerAdmin,
  loginAdmin
};
