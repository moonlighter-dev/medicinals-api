const Herb = require('../models/Herbs')

module.exports = {
    getHerbs: async (req,res)=>{
        console.log(req.user)
        try{
            const herbs = await Herb.find({userId:req.user.id})
            const totalHerbs = await Herb.countDocuments({userId:req.user.id,completed: false})
            res.render('herbs/herbs', {herbs: herbs, total: totalHerbs, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    viewHerb: async (req,res)=>{
        console.log(req.user)
        try{
            const herb = await Herb.find({herbId:req.herb.id})
            const totalHerbs = await Herb.countDocuments({userId:req.user.id,completed: false})
            res.render('herbs/herb', {herbId: herbId, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    
    newHerb: async (req, res) => {
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
            res.redirect(`herbs/${newHerb.id}`)
        }catch(err){
            console.log(err)
        }
    },

    editHerb: async (req, res) => {
        try {
            const herb = await Herb.findById(req.params.id)
            res.render('/edit', { herbId: herb })
        }
        catch {
            res.redirect('/herbs')
        }
    },

    updateHerb: async (req, res)=>{
        try{
            await Herb.findOneAndUpdate({_id:req.body.herbIdFromJSFile},{
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
            res.json('Herb Updated!')
        }catch(err){
            console.log(err)
        }
    },

    deleteHerb: async (req, res)=>{
        console.log(req.body.herbIdFromJSFile)
        try{
            await Herb.findOneAndDelete({_id:req.body.herbIdFromJSFile})
            console.log('Deleted Herb')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    