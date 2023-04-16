const router = require('express').Router()
const controller = require('../controllers/UserController')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/VerifyToken")

 
router.put("/:id", verifyTokenAndAuthorization,  controller.updateUser)
router.delete("/:id", verifyTokenAndAuthorization,  controller.deleteUser)


module.exports = router
