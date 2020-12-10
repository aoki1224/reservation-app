const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  // productId: ObjectId,
  coverImage: String,
  name: { type: String, required: true, maxlength: [60, '最大６０文字までです'] },
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingText1: String,
  headingText2: String,
  headingText3: String,
});

module.exports = mongoose.model('Product', ProductSchema)
