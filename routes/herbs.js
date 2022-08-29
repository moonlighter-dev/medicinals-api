const express = require('express')
const router = express.Router()
const herbsController = require('../controllers/herbs') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, herbsController.getHerbs)

router.get('/addHerb', herbsController.newHerb)

router.post('/addHerb', herbsController.addHerb)

router.get('/editHerb', herbsController.editHerb)

router.put('/editHerb', herbsController.updateHerb)

router.delete('/deleteHerb', herbsController.deleteHerb)

module.exports = router