const Herb = require('../models/Herbs')

module.exports = {
    getIndex: async (req,res) => {
        let herbs
        try {
            herbs = await Herb.find().sort({ createdAt: 'desc' }).limit(10).exec()
        }
        catch {
            herbs = []
        }
        res.render('herbs/herbs', { herbs: herbs })
    }
}