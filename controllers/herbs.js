const Herb = require('../models/Herbs')
const cloudinary = require("../middleware/cloudinary")

module.exports = {

    viewHerb: async (req,res)=>{
        // console.log(req.user, req.params.id)
        try{
            const herb = await Herb.findById(req.params.id).lean()
            res.render('herbs/herb', { herb: herb, user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    
    newHerb: (req, res) => {
        // console.log(req.user)
        try {
            res.render('herbs/add', { user: req.user })
        }
        catch(err) {
            console.log(err)
            res.redirect('/')
        }
        
    },

    addHerb: async (req, res)=>{
        console.log(req.body)
        const result = await cloudinary.uploader.upload(req.file.path)

        const actions = req.body.actions.split('/r/n')

        // console.log(req.user)
        let herb = new Herb({
            name: req.body.name, 
            latinName: req.body.latinName, 
            commonName: req.body.commonName,
            temp: req.body.temp,
            properties: req.body.properties,
            channels: req.body.channels,
            category: req.body.category,
            actions: actions,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            addedby: req.user.id,
        })
        try{
            herb = await herb.save()
            console.log('Herb has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },

    editHerb: async (req, res) => {
        // console.log(req.user, req.params.id)
        try {
            const herb = await Herb.findById(req.params.id).lean()
            console.log(herb)
            res.render('herbs/edit', { herb, user: req.user })
        }
        catch(err) {
            console.log(err)
            res.redirect('/')
        }
    },

    updateHerb: async (req, res)=>{
        // console.log(req.user, req.params.id)
        try{
            let herb = await Herb.findOneAndUpdate({ _id: req.params.id })
            console.log(`${herb.name} updated!`)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },

    deleteHerb: async (req, res)=>{
        // console.log(req.user, req.params.id)
        // alert "Are you sure??"
        console.log("Entering delete scenario")
        try{
            let herb = await Herb.findById({ _id: req.params.id })
            await cloudinary.uploader.destroy(herb.cloudinaryId)
            await Herb.remove({ _id: req.params.id })
            console.log(`Deleted!`)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}    