const express = require("express");
const {
  getStores,
  createStore,
  getStoreById,
  updateStore,
  deleteStore,
} = require("../controllers/storeController");

const router = express.Router();

router.route("/").get(getStores);
router.route("/create").post(createStore);
router
  .route("/:id")
  .get(getStoreById)
  .put(updateStore)
  .delete(deleteStore);

module.exports = router;