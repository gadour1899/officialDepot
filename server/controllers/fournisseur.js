//Controller related to comments ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const db= require('../orm/index.js');
const Fournisseur= db.Fournisseur
const cloudinary= require('../cloudinary/cloudinary.js');
module.exports = {

// method to add a new fournisseur
    addFournisseur:async (req, res)=> {
        console.log(req.body);
        const {CompanyName,manager,email,password,image,adress} = req.body;
        try{
            const result = await cloudinary.uploader.upload(image,{
                folder:'fournisseurs'
            })
        const fournisseur = await Fournisseur.create({
            CompanyName,
            manager,
            email,
            password,
            image:{
                public_id: result.public_id,
                url: result.secure_url
            },
            adress

    
        }
        )

        res.status(200).send(fournisseur)
    }catch (err){console.log(err)}
},
// method to update fournisseur information in the database
updateFournisseur:async (req, res)=> {
    let id=req.params.id
    const product = await Fournisseur.update(req.body,{where:{id:id}})
    res.status(200).send(product)
},

// method to delete a fournisseur account 
deleteFournisseur:async (req, res)=> {
    let id=req.params.id
    await Fournisseur.destroy({where:{id:id}})
    res.status(200).send('account deleted')
},

getFournisseur:async (req, res)=> {
    let fournisseurs = await Fournisseur.findAll({})
    res.status(200).send(fournisseurs)
    },

}