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

// Optimizations to API: 
// get herbs by category
// get herbs by name, latin name, common name

module.exports = router