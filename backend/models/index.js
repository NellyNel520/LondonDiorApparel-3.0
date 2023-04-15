const mongoose = require('mongoose')
const UserSchema = require('./user')
const ProductSchema = require('./product')
const OrderSchema = require('./order')
const CategorySchema = require('./category')

const User = mongoose.model('User', UserSchema)
const Product = mongoose.model('Product', ProductSchema)
const Order = mongoose.model('Order', OrderSchema)
const Category = mongoose.model('Category', CategorySchema)

module.exports = {
  User,
  Product,
  Order,
  Category,
  
}