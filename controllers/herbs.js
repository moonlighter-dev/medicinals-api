const Herb = require('../models/Herbs')

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

        const result = await cloudinary.uploader.upload(req.file.path)

        // console.log(req.user)
        let herb = new Herb({
            name: req.body.name, 
            latinName: req.body.latinName, 
            commonName: req.body.commonName,
            temp: req.body.temp,
            flavor: req.body.flavor,
            channels: req.body.channels,
            category: req.body.category,
            actions: req.body.actions,
            image: result.secure_url,
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
        try{
            let herb = await Herb.findById({ _id: req.params.id })
            await cloudinary.uploader.destroy(post.cloudinaryId)
            await Post.remove({ _id: req.params.id })
            console.log(`Deleted!`)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}    