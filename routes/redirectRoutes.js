const express = require('express')
const router = express.Router()
const redirectController = require('../controllers/redirectController')

router.get('/:code', redirectController.redirectHandler)


module.exports = router