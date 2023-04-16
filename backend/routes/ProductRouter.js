const router = require('express').Router()
const controller = require('../controllers/ProductController')
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')

router.post('/add', verifyTokenAndAdmin, controller.createProduct)

router.put('/update/:id', verifyTokenAndAdmin, controller.updateProduct)

module.exports = router