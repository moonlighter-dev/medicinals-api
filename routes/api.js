const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api') 
const { ensureAuth } = require('../middleware/auth')

// get all herbs in JSON
// route: GET /herbs
router.get('/', apiController.getAll)


// get one herb
// route: GET /herbs/:id
router.get('/:id', apiController.getOne)

module.exports = router