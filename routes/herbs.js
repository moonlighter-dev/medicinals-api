const express = require('express')
const router = express.Router()
const herbsController = require('../controllers/herbs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', herbsController.getHerbs)

router.get('/:id', herbsController.viewHerb)

router.get('/addHerb', ensureAuth, herbsController.newHerb)

router.post('/addHerb', ensureAuth, herbsController.addHerb)

router.get('/editHerb/:id', ensureAuth, herbsController.editHerb)

router.put('/editHerb/:id', ensureAuth, herbsController.updateHerb)

router.delete('/deleteHerb/:id', ensureAuth, herbsController.deleteHerb)

module.exports = router