const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinaryUpload = require('../utils/Cloudinary');
const Insurance = require('../models/Insurance');

// Set up multer for file upload
const createInsurance = async (req, res, next) => {
    const { image } = req.files;
    const { title, owner, url, address, email,
        number, companyRegNumber, comprehensive, Tier,
        Rapid, Virtual, Extensive, NoCbonus, freeLife,
        OnSite, DirectSettle, Extentions, FuneralExpense,
        AccInjury, Air, WildScreen, Call, AlterTrans, AlterVehicle,
        ThirdParty, Surgery, DamagedKey, Freesound, BackTo,
        OptionsOf, Baby, Agift, FreePersonal, Other, Online, FreeTowing,
        DoorStep
    } = req.body;

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
        const shop = await Insurance.create({
            image: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            title,
            owner,
            url,
            address,
            email,
            number,
            companyRegNumber,
            comprehensive, Tier,
            Rapid,
            Virtual,
            Extensive,
            NoCbonus,
            freeLife,
            OnSite,
            DirectSettle,
            Extentions,
            FuneralExpense,
            AccInjury,
            Air,
            WildScreen,
            Call,
            AlterTrans,
            AlterVehicle,
            ThirdParty,
            Surgery,
            DamagedKey,
            Freesound,
            BackTo,
            OptionsOf,
            Baby,
            Agift,
            FreePersonal,
            Other,
            Online,
            FreeTowing,
            DoorStep

        });

        // Send a success response
        res.status(201).json({ success: true });
    } catch (err) {
        // Handle any errors that occur during the process
        console.log(err);
        res.status(500).json({ success: false, message: 'Error creating insurance' });
    }
};

const findAllShops = (req, res, next) => {
    Shop.find().then(station => {
        if (station) {
            res.json({
                massage: station
            })
        }
    }
    )
}

const getShop = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Shop.findOne({ _id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}
const findInsurance = async (req, res, next) => {
    var comprehensive = req.body.comprehensive
    var Tier = req.body.Tier
    var Rapid = req.body.Rapid
    var Virtual = req.body.Virtual
    var Extensive = req.body.Extensive
    var NoCbonus = req.body.NoCbonus
    var freeLife = req.body.freeLife
    var OnSite = req.body.OnSite
    var DirectSettle = req.body.DirectSettle
    var Extentions = req.body.Extentions
    var FuneralExpense = req.body.FuneralExpense
    var AccInjury = req.body.AccInjury
    var Air = req.body.Air
    var WildScreen = req.body.WildScreen
    var Call = req.body.Call
    var AlterTrans = req.body.AlterTrans
    var AlterVehicle = req.body.AlterVehicle
    var ThirdParty = req.body.ThirdParty
    var Surgery = req.body.Surgery
    var DamagedKey = req.body.DamagedKey
    var Freesound = req.body.Freesound
    var BackTo = req.body.BackTo
    var OptionsOf = req.body.OptionsOf
    var Baby = req.body.Baby
    var Agift = req.body.Agift
    var FreePersonal = req.body.FreePersonal
    var Other = req.body.Other
    var Online = req.body.Online
    var FreeTowing = req.body.FreeTowing
    var DoorStep = req.body.DoorStep
    try {
        const result = await Insurance.find({ 
            comprehensive: comprehensive,
            Tier:Tier,
            Rapid:Rapid,
            Virtual:Virtual,
            Extensive:Extensive,
            NoCbonus:NoCbonus,
            freeLife:freeLife,
            OnSite:OnSite,
            DirectSettle:DirectSettle,
            Extentions:Extentions,
            FuneralExpense:FuneralExpense,
            AccInjury:AccInjury,
            Air:Air,
            WildScreen:WildScreen,
            Call:Call,
            AlterTrans:AlterTrans,
            AlterVehicle:AlterVehicle,
            ThirdParty:ThirdParty,
            Surgery:Surgery,
            DamagedKey:DamagedKey,
            Freesound:Freesound,
            BackTo:BackTo,
            OptionsOf:OptionsOf,
            Baby:Baby,
            Agift:Agift,
            FreePersonal:FreePersonal,
            Other:Other,
            Online:Online,
            FreeTowing:FreeTowing,
            DoorStep:DoorStep
        });
        if (!result) {
            return res.status(404).send("Insurance not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}

module.exports = {
    createInsurance, findInsurance
};
