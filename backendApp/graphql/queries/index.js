const { 
	GraphQLString, 
	GraphQLList, 
	GraphQLNonNull,
	GraphQLObjectType, 
} = require("graphql");
const Product = require("../../data/models/Product");
const ProductType = require("./ProductType");


const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		product: {
			type: ProductType,
			args:  { id: { type: new GraphQLNonNull(GraphQLString) } },
			resolve (parent, args) {
				return Product.findById(args.id);
			},
		},
		products: {
			type: new GraphQLList(ProductType),
			resolve () {
				return Product.find({});
			},
		}
	},
}); 

module.exports = RootQuery;