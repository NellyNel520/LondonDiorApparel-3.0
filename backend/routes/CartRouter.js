const router = require('express').Router()
const controller = require('../controllers/CartController')
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')


router.post('/', verifyToken, controller.createCart)


module.exports = router
