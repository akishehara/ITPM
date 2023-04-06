const express = require("express");
const stores = require("./data/stores");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get("/", (req,res) => {
    res.send("API is running..");
});

app.get("/api/stores", (req, res) => {
    res.json(stores);
});

app.get('/api/stores/:id', (req, res) =>{
    const store = stores.find((n) => n._id === req.params.id );

    res.send(store);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));