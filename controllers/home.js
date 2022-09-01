const Herb = require('../models/Herbs')
const User = require('../models/User')

module.exports = {
    getIndex: async (req,res) => {
        console.log(req.user)
        let herbs = {}
        try {
            herbs = await Herb.find().lean()
        }
        catch(err) {
            herbs = []
            console.log(err)
        }
        res.render('index', { user: req.user, herbs: herbs })
    }
}