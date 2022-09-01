const Herb = require('../models/Herbs')

module.exports = {
    getAll: async (req,res)=>{
        let herbs = {}
        try{
            herbs = await Herb.find().lean()
            console.log(herbs)
            res.json(herbs)
        }catch(err){
            console.log(err)
        }
    },

    getOne: async (req,res)=>{
        console.log(req.user, req.params.id)
        try{
            const herb = await Herb.findById(req.params.id).lean()
            res.json(herb)
        }catch(err){
            console.log(err)
        }
    },
    
}    