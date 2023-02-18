// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {

    const fournisseur = sequelize.define("fournisseurs", {
        CompanyName:{ type:DataTypes.STRING},
        manager:{ type:DataTypes.STRING},
        email:{ type:DataTypes.STRING},
        password:{ type:DataTypes.STRING},
        image:{ type:DataTypes.STRING},
        adress:{ type:DataTypes.STRING},
        phoneNumber:{ type:DataTypes.INTEGER},  
    }  ,{timestamps:true});
  
    return fournisseur;
  };