const express = require('express');
const db=require('./orm/index.js')
const cors = require('cors');
//Create an Express App
const app = express();
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

//Require application Route modules
const Fournisseur = require('./routes/fournisseur.js');
const Product=require('./routes/product.js');
const User = require('./routes/users.js'); 


//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cookieParser())

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/fournisseur', Fournisseur);
app.use('/api/product', Product);
app.use('/api/user', User);

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening http://localhost:3000/`);
})

module.exports = app; // export the express app.


