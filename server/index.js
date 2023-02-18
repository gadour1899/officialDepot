const express = require('express');
const db=require('./orm/index.js')
const cors = require('cors');
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
console.log(process.env.SECRET_KEY);
console.log(process.env.gadour);


//Create an Express App
const app = express();

//Require application Route modules
const Fournisseur = require('./routes/fournisseur.js');
const Product=require('./routes/product.js');
const User = require('./routes/users.js'); 

app.use(express.static(__dirname + "/../client/dist"));

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(__dirname + "/../client/dist"));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/fournisseur', Fournisseur);
app.use('/api/product', Product);
app.use('/api/user', User);

const port = 3000;



app.listen(port, () => {
    console.log(`Server listening localhost:${port}`);
})

module.exports = app; // export the express app.


