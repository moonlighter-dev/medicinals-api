const express = require('express')
const router = express.Router()
const herbsController = require('../controllers/herbs') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, herbsController.getHerbs)

router.post('/addHerb', herbsController.addHerb)

router.put('/editHerb', herbsController.editHerb)

router.delete('/deleteHerb', herbsController.deleteHerb)

module.exports = router