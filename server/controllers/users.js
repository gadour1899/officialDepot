//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const bcrypt = require("bcrypt");
const db =require('../orm/index.js');
const User = db.User ;  
const jwt =require('jsonwebtoken');


module.exports = {
    //method to add  a new user
    addUser:async (req, res)=> {
        let customer = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            adress: req.body.adress,
            phoneNumber: req.body.phoneNumber,
        }
        const user = await User.create(customer)
        res.status(201).send(user)
    },
    //get all the users
    getUsers:async (req, res)=> {
        const users = await User.findAll()
        res.status(200).send(users)
    },
    //get all the users
    // update User information in database
    updateUser:async (req, res)=> {
        let customer = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            adress: req.body.adress,
            phoneNumber: req.body.phoneNumber,
        }
        const user = await User.update(customer, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(user)
    },
    // delete User information in database
    deleteUser:async (req, res)=> {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("user deleted successfully")
    },
    //signing a user up
//hashing users password before its saved to the database with bcrypt

  signUp:async (req, res)=> {
    try{
        const {name,email,password,adress,phoneNumber} =req.body;
        const data = {
            name,
            email,
            password:await bcrypt.hash(password,10),
            adress,
            phoneNumber,
        };
        //saving the user
   const user = await User.create(data);

   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   if(user){
    let token=jwt.sign({id:user.id,name:user.name,email:user.email},process.env.SECRET_KEY,{
        expiresIn: 1 * 24 * 60 * 60 * 1000,
    });
    // res.cookie('jwt',token);
    // console.log(token);
    return res.status(201).send(user);
} else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
},
//login authentication
  login : async (req, res) => {
    try{
        const {email,password} = req.body;
        //find a user by their email
   const user = await User.findOne({
    where: {
    email: email
  } 
  });
  //if user email is found, compare password with bcrypt
  if (user) {
    const isSame = await bcrypt.compare(password, user.password);

    //if password is the same
     //generate token with the user's id and the secretKey in the env file

    if (isSame) {
      let token = jwt.sign({ id:user.id }, process.env.SECRET_KEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      //if password matches wit the one in the database
      //go ahead and generate a cookie for the user
      res.cookie("jwt", token);
      console.log(token);
      //send user data
      return res.status(201).send(user);
    } else {
      return res.status(401).send("Authentication failed");
    }
  } else {
    return res.status(401).send("Authentication failed");
  }
} catch (error) {
  console.log(error);
}
},

 getUser:async (req, res) => {
  try{
    const token = req.headers.jwt
    if (token) {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({
      where: {
        id: data.id
      }
    });
      res.send(user);
    } else {
      res.status(400).send("Cookie not found");
    }
  }catch (error) {
    console.log(error);}
   
 }
}