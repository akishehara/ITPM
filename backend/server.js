const express = require("express");
const users = require("./data/users");
const dotenv = require('dotenv');
const userRoutes =require('./routes/userRoutes');
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.get('/api/user', (req, res) => {
    res.json(users)
})
app.use('api/users',userRoutes)

app.get("/api/users/:id", (req, res) => {
    const user = users.find((n) => n._id === req.params.id);

    res.send(user);
})

const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log(`server started on PORT ${PORT}`));
