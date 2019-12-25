const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const auth = require('../middlewares/authMiddleware')

module.exports = router
