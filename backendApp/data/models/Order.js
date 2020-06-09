const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema(
	{
		_id: Schema.Types.ObjectId,
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		comments: {
			type: String,
		},
		cart: [
			{
				productId: { type: Schema.Types.ObjectId, ref: "Product" },
				dough: {
					type: String,
					required: true,
				},
				size: {
					type: String,
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
			},
		],
		created: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	}
);

module.exports = mongoose.model("Order", OrderSchema);
