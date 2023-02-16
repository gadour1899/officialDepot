const express = require('express');
const db=require('./orm/index.js')
const cors = require('cors');

//Create an Express App
const app = express();
const bcrypt = require('bcrypt');


//Require application Route modules
const Fournisseur = require('./routes/fournisseur.js');
const Product=require('./routes/product.js');
const User = require('./routes/users.js'); 


//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/fournisseur', Fournisseur);
app.use('/api/product', Product);
app.use('/api/user', User);

// app.post("/api/register",body('name').isString().isLength({min:3}).not().isEmpty(),
// body('email').isEmail().withMessage("Email format is incorrect"),
// body('password').isString().isLength({min:3}).not().isEmpty(),
//  body('adress').isString().isLength({min:3}).not().isEmpty(),
//  body('phoneNumber').isString().isLength({max:11}).optional(),
//  async (req,res)=> {
//     const errors = validationResult(req);
//     if(!errors.isEmpty())
//     return res.status(400).json({errors:errors.array()})
//     await connect()
//     let user = await User.findOne({
//         where:{
//             email:req.body.email
//         }
//     }) 
//     if(user)
//     return res.status(400).json({errors:{message:"user account already exsits"}})
//     const hashedPassword = bcrypt.hashSync(req.body.password,10)
//     user = await User.create({
//         name:req.body.name,
//         email:req.body.email,
//         password:hashedPassword,
//         adress:req.body.adress,
//         phoneNumber:req.body.phoneNumber
//  }
// )
// close()
// res.send(user)

//  })


const port = 3000;

app.listen(port, () => {
    console.log(`Server listening localhost:${port}`);
})

module.exports = app; // export the express app.


