const mongoose = require('mongoose')
const UserSchema = require('./user')
const ProductSchema = require('./product')

const User = mongoose.model('User', UserSchema)
const Product = mongoose.model('Product', ProductSchema)

module.exports = {
  User,
  Product,
}