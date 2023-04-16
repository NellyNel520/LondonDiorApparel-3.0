const router = require('express').Router()
const controller = require('../controllers/UserController')
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')

router.put('/:id', verifyTokenAndAuthorization, controller.updateUser)
router.delete('/:id', verifyTokenAndAuthorization, controller.deleteUser)
router.get('/find/:id', verifyTokenAndAdmin, controller.getUserById)
router.get('/all', verifyTokenAndAdmin, controller.getAllUsers)

module.exports = router
