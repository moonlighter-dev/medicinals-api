const Herb = require('../models/Herbs')
const User = require('../models/User')

module.exports = {
    getIndex: async (req,res) => {
        let herbs
        let user
        try {
            herbs = await Herb.find().sort({ createdAt: 'desc' }).limit(10).exec()
            user = req.user
        }
        catch {
            herbs = []
            user = ""
        }
        res.render('herbs/herbs', { user: user, herbs: herbs })
    }
}