const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	_id: Schema.Types.ObjectId,
	title: {
		type: String,
		required: true,
		unique: true,
	},
	basePrice: {
		type: Number,
		required: true,
	},
	imageSrc: {
		type: String,
	},
	popularity: {
		type: Number,
		min: 1,
		max: 11,
	},
	created: {
		type: Date,
		default: Date.now
	},
}, {
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model("Product",  ProductSchema);