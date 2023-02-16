const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config');


//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize(config.DATABASE, config.USER,config.PASSWORD, {
    HOST: 'localhost',
    dialect: 'mysql'
  });




//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./users.model.js')(sequelize,DataTypes) //require the user model
db.Product = require('./product.model.js')(sequelize,DataTypes)//require the post model
db.Fournisseur = require('./fournisseur.model.js')(sequelize,DataTypes)//require the comment model

db.sequelize.sync({force:false})


.then(()=>{console.log("All models were synchronized successfully.")})
.catch(err => {console.log(err)})
  

// many to many relationship  user  product  




db.User.belongsToMany(db.Product,{
through:"relation"

})
db.Product.belongsToMany(db.User,{
  through:"relation"
})

// 1  to many relationship  product fournisseur
db.Fournisseur.hasMany(db.Product)
  db.Product.belongsTo(db.Fournisseur)




//   //try
//   db.Fournisseur.create({CompanyName:"WOODY",
//   manager:"marwen",
//   email:"marwen@rbk.rbk",
//   password:"yaallah",
//  image:" nice pic",
//   adress:"35 rue al yarmouk cité hached 2 ",
//   phoneNumber:"41000494"
  
// })


// db.Product.create({
//   name:"MDFF",
//   price:"2000",
//   image:"nice pict",
//   description:"MDF 15/16",
//   category:"wood",
//   quantity:"900"
// })


// 
// 
// 
// 
// 
// 
// 
// 

sequelize.authenticate()
.then(()=>{console.log('Successfully authenticated')})
.catch(err => {console.log(err)})

module.exports = db;
