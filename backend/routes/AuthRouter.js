const router = require('express').Router()
const controller = require('../controllers/AuthController')

router.post('/register', controller.Register)

module.exports = router

