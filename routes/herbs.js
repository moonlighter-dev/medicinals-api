const express = require('express')
const router = express.Router()
const herbsController = require('../controllers/herbs') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', herbsController.getHerbs)

router.get('/addHerb', ensureAuth, herbsController.newHerb)

router.post('/addHerb', ensureAuth, herbsController.addHerb)

router.get('/editHerb', ensureAuth, herbsController.editHerb)

router.put('/editHerb', ensureAuth, herbsController.updateHerb)

router.delete('/deleteHerb', ensureAuth, herbsController.deleteHerb)

module.exports = router