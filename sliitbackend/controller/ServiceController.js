const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Service = require('../models/Service')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const registerService = (req, res, next) => {
    let service = new Service({
        owner_id: req.body.owner_id,
        owner_email:req.body.owner_email,
        SName: req.body.SName,
        CName: req.body.CName,
        ServiceType: req.body.ServiceType,
        province:req.body.province,
        district:req.body.district
    })
    service.save().then(user => {
        res.json({
            massage: "Service added"
        })
    })
        .catch(error => {
            res.json({
                massage: error
            })
        })

}
const findAllServices = (req, res, next) => {
    Service.find().then(station => {
        if (station) {
            res.json({
                massage: station
            })
        }
    }
    )
}
const deleteStation = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Service.findOneAndDelete({ _id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send("Fuel station deleted successfully");
    } catch (err) {
        // Handle errors here
    }
};

const getAService = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Service.findOne({_id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}

const getServicesByOwnerId = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Service.find({ owner_id: delid });
        if (!result) {
            return res.status(404).send("Service not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}

const updateService = async (req, res, next) => {
    const itemId = req.params.id;
    const updatedItem = req.body; 
    console.log(req.body)
    try {
      const result = await Service.findOneAndUpdate({_id: itemId }, updatedItem, { new: true });
      if (!result) {
        return res.status(404).send("Shop  not found");
      }
      return res.status(200).send(result);
    } catch (err) {
      // Handle errors here
      next(err);
    }
  }
  const getGarageByDistrict = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Service.find({ district: delid });
        if (!result) {
            return res.status(404).send("District not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}


module.exports = {
    registerService,getServicesByOwnerId,findAllServices,getAService,getGarageByDistrict,deleteStation,updateService
}