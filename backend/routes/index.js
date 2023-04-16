const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const UserRouter = require("./UserRouter")
const ProductRouter = require("./ProductRouter")
const CartRouter = require("./CartRouter")
const OrderRouter = require("./OrderRouter")
const StripeRouter = require("./StripeRouter")

// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))


Router.use("/auth", AuthRouter)
Router.use("/user", UserRouter)
Router.use("/products", ProductRouter)
Router.use("/cart", CartRouter)
Router.use("/order", OrderRouter)
Router.use("/checkout", StripeRouter)


module.exports = Router;