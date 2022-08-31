const Herb = require('../models/Herbs')

module.exports = {
    getHerbs: async (req,res)=>{
        console.log(req.user)
        let herbs = {}
        try{
            herbs = await Herb.find().lean()
            console.log(herbs)
            // const totalHerbs = await Herb.countDocuments({ createdBy:req.user.id })
            res.render('herbs/herbs', { herbs, user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    viewHerb: async (req,res)=>{
        console.log(req.user)
        try{
            const herb = await Herb.findById(req.params.id).lean()
            res.render('herbs/herb', { herb, user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    
    newHerb: (req, res) => {
        console.log(req.user)
        try {
            res.render('herbs/add', { user: req.user })
        }
        catch(err) {
            console.log(err)
            res.redirect('/herbs')
        }
        
    },

    addHerb: async (req, res)=>{
        const herb = new Herb({
            name: req.body.name, 
            latinName: req.body.latinName, 
            commonName: req.body.commonName,
            temp: req.body.temp,
            flavor: req.body.flavor,
            channels: req.body.channels,
            category: req.body.category,
            actions: req.body.actions,
            image: req.body.image
        })
        try{
            const newHerb = await herb.save()
            console.log('Herb has been added!')
            res.redirect(`herbs/${newHerb._id}`)
        }catch(err){
            console.log(err)
        }
    },

    editHerb: async (req, res) => {
        try {
            const herb = await Herb.findById(req.params.id)
            res.render('/edit', { herb: herb })
        }
        catch {
            res.redirect('/herbs')
        }
    },

    updateHerb: async (req, res)=>{
        console.log(req.body.herbIdFromJSFile)
        try{
            let herb = await Herb.findOneAndUpdate({_id: req.params.id },{
                name: req.body.name, 
                latinName: req.body.latinName, 
                commonName: req.body.commonName,
                temp: req.body.temp,
                flavor: req.body.flavor,
                channels: req.body.channels,
                category: req.body.category,
                actions: req.body.actions,
                image: req.body.image
            })
            console.log('Herb Updated!')
            res.redirect(`herbs/${herb._id}`)
        }catch(err){
            console.log(err)
        }
    },

    deleteHerb: async (req, res)=>{
        console.log(req.body.herbIdFromJSFile)
        // alert "Are you sure??"
        try{
            await Herb.findOneAndDelete({_id:req.body.herbIdFromJSFile})
            console.log('Deleted Herb')
            res.redirect('/herbs')
        }catch(err){
            console.log(err)
        }
    }
}    