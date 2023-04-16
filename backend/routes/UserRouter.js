const router = require('express').Router()
const controller = require('../controllers/UserController')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/VerifyToken")

 
router.put("/:id", verifyTokenAndAuthorization,  controller.updateUser)


module.exports = router
