const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema(
    {
      name: { type: String, required: true },
      code: { type: String, required: true },
      image: { type: String },
      products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
    },
    { timestamps: true }
  )


module.exports = Category