// Define and export the sequelize model that represents the table posts.

module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define("products", {
      name: {type: DataTypes.STRING},
      price: {type: DataTypes.INTEGER},
      image:{type:DataTypes.STRING},
      description: {type: DataTypes.STRING},
      category: {type: DataTypes.STRING},
      quantity: {type: DataTypes.INTEGER}, 
      fournisseurId:{
        type:DataTypes.INTEGER,
        foreignKey:true,
      },
    });
    return product;
  };