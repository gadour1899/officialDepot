const express=require("express")
const db=require("../orm/index.js")

const Fournisseur= db.Fournisseur

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email

const saveFournisseur= async(req,res,next)=>{
    try{
        const CompanyName= await Fournisseur.findOne({
            where:{
                CompanyName:req.body.CompanyName
            }
        })
        //if name exist in the database respond with a status of 409
        if(CompanyName){
            return res.json(409).send("Company name already taken")
        }
        //checking if email already exist
        const emailCheck=await Fournisseur.findOne({
            where:{email:req.body.email}
        })
            //if email exist in the database respond with a status of 409
            if(emailCheck){
                return res.json(409).send("Authentication failed")
            }
            next();

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    saveFournisseur,
    };
    //exporting module