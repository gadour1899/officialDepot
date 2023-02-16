// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
      name:{type:DataTypes.STRING},
      email:{type:DataTypes.STRING},
      password:{type:DataTypes.STRING},
      adress:{type:DataTypes.STRING},
      phoneNumber:{type:DataTypes.INTEGER},
  });

  return User;
};