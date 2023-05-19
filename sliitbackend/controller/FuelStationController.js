const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const FuelStation = require('../models/FuelStation')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const registerFuelStation = (req, res, next) => {
    let fuelstation = new FuelStation({
        id: uuidv4(),
        Name: req.body.Name,
        CompanyName: req.body.CompanyName,
        Province: req.body.Province,
        District:req.body.District
    })
    fuelstation.save().then(user => {
        res.json({
            massage: "Fuel Station added"
        })
    })
        .catch(error => {
            res.json({
                massage: error
            })
        })

}
const findAllStation = (req, res, next) => {
    FuelStation.find().then(station => {
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
        const result = await FuelStation.findOneAndDelete({ id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send("Fuel station deleted successfully");
    } catch (err) {
        // Handle errors here
    }
};

const getFuelStation = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await FuelStation.findOne({ id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}

const getFuelStationByDistrict = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await FuelStation.find({ District: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}

const updateFuelStation = async (req, res, next) => {
    const itemId = req.params.id;
    const updatedItem = req.body; 
    console.log(req.body)
    try {
      const result = await FuelStation.findOneAndUpdate({id: itemId }, updatedItem, { new: true });
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
    registerFuelStation, findAllStation, deleteStation, getFuelStation,updateFuelStation,getFuelStationByDistrict
}