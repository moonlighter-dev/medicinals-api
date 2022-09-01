const express = require('express')
const router = express.Router()
const herbsController = require('../controllers/herbs') 
const { ensureAuth } = require('../middleware/auth')

// show one herb
// route: GET /herbs/:id
router.get('/view/:id', ensureAuth, herbsController.viewHerb)

// show add form
// route: GET /herbs/new
router.get('/new', ensureAuth, herbsController.newHerb)

// process add form
// route: POST /herbs
router.post('/new', ensureAuth, herbsController.addHerb)

// show edit page
// route: GET /herbs/edit/:id
router.get('/edit/:id', ensureAuth, herbsController.editHerb)

// process edit form
// route: PUT /herbs/:id
router.put('/edit/:id', ensureAuth, herbsController.updateHerb)

// delete an herb
// route: DELETE /herbs/:id
router.delete('/edit/:id', ensureAuth, herbsController.deleteHerb)

module.exports = router