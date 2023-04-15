const mongoose = require('mongoose')
const UserSchema = require('./user')
const ProductSchema = require('./product')
const OrderSchema = require('./order')
const CategorySchema = require('./category')
const CartSchema = require('./cart')

const User = mongoose.model('User', UserSchema)
const Product = mongoose.model('Product', ProductSchema)
const Order = mongoose.model('Order', OrderSchema)
const Category = mongoose.model('Category', CategorySchema)
const Cart = mongoose.model('Cart', CartSchema)

module.exports = {
  User,
  Product,
  Order,
  Category,
  Cart

}