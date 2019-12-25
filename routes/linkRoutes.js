const express = require('express')
const router = express.Router()
const linksController = require('../controllers/linksController')
const auth = require('../middlewares/authMiddleware')

router.post('/generate', auth.authMiddleware, linksController.generateLink)
router.get('/:id', auth.authMiddleware, linksController.getLinkById)
router.get('/', auth.authMiddleware, linksController.getAllLinks)

module.exports = router
