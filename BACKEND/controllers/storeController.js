const Store = require("../models/storeModels");
const asyncHandler = require("express-async-handler");

const getStores = asyncHandler(async (req, res) => {
  const stores = await Store.find();
  res.json(stores);
});

const createStore = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    address,
    district,
    hours,
    days,
    phone,
  } = req.body;

  if (
    !name ||
    !category ||
    !address ||
    !district ||
    !hours ||
    !days ||
    !phone 
    
  ) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    const store = new Store({
      name,
      category,
      address,
      district,
      hours,
      days,
      phone,
    });

    const createdStore = await store.save();

    res.status(201).json(createdStore);
  }
});

const getStoreById = asyncHandler(async (req, res) => {
  const store = await Store.findById(req.params.id);

  if (store) {
    res.json(store);
  } else {
    res.status(404).json({ message: "Store not found" });
  }
});

const updateStore = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    address,
    district,
    hours,
    days,
    phone,
  } = req.body;

  const store = await Store.findById(req.params.id);

  if (store) {
    store.name = name;
    store.category = category;
    store.address = address;
    store.district = district;
    store.hours = hours;
    store.days = days;
    store.phone = phone;
    

    const updateStore = await store.save();
    res.json(updateStore);
  } else {
    res.status(404);
    throw new Error("Store not found");
  }
});

const deleteStore = asyncHandler(async (req, res) => {
  const store = await Store.findById(req.params.id);

  if (store) {
    await store.remove();
    res.json({ message: "Store Removed" });
  } else {
    res.status(404);
    throw new Error("Store not found");
  }
});

module.exports = {
    getStores,
    createStore,
    getStoreById,
    updateStore,
    deleteStore,
};