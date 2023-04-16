const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const UserRouter = require("./UserRouter")
const ProductRouter = require("./ProductRouter")
const CartRouter = require("./CartRouter")

// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))


Router.use("/auth", AuthRouter)
Router.use("/user", UserRouter)
Router.use("/product", ProductRouter)
Router.use("/cart", CartRouter)


module.exports = Router;