const Herb = require('../models/Herbs')

module.exports = {
    getHerbs: async (req,res)=>{
        console.log(req.user)
        try{
            const herbs = await Herb.find({userId:req.user.id})
            const totalHerbs = await Herb.countDocuments({userId:req.user.id,completed: false})
            res.render('herbs.ejs', {herbs: herbs, total: totalHerbs, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    
    addHerb: async (req, res)=>{
        try{
            await Herb.create({
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
            console.log('Herb has been added!')
            res.redirect('/herbs')
        }catch(err){
            console.log(err)
        }
    },

    editHerb: async (req, res)=>{
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
        console.log(req.body.todoIdFromJSFile)
        try{
            await Herb.findOneAndDelete({_id:req.body.herbIdFromJSFile})
            console.log('Deleted Herb')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    