const express=require("express")
const morgan=require('morgan')
const bodyParser=require('body-parser')

const app=express();

const mongoose=require('mongoose')

const AuthRoute=require('./routes/AuthRoute')
const AdminRoute=require('./routes/AdminRoute')
const CustomerRoute=require('./routes/CustomerRoute')
const FuelStationRoute=require('./routes/FuelStationRoute')
const ShopRoute=require('./routes/ShopRoute')
const ItemRoute=require('./routes/ItemRoute')
const ServiceRoute=require('./routes/ServiceRoute')
const ReviewRoute=require('./routes/ReviewRoute')
const InsuranceRoute=require('./routes/InsuranceRoute')

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the appropriate origin URL or '*' to allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const url = 'mongodb+srv://sliit:12345@cluster0.tlloytl.mongodb.net/test';

async function connect(){
  try{
    await mongoose.connect(url)
    console.log("connected")
  } catch(e){
    console.log(e);
  } 
}
const fileupload = require('express-fileupload'); 

app.use(fileupload({useTempFiles: true}))

connect();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const PORT=4000;

app.listen(PORT,console.log("server started"))

app.use('/register',AuthRoute)
app.use('/register',AdminRoute)
app.use('/register',CustomerRoute)
app.use('/register',FuelStationRoute)
app.use('/shop',ShopRoute)  
app.use('/item',ItemRoute)
app.use('/register',ServiceRoute)
app.use('/create',ReviewRoute)
app.use('/insurance',InsuranceRoute)
app.use('/upload',express.static('upload'))
