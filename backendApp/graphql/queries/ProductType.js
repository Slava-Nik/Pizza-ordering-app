const { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLNonNull } = require("graphql");
const ProductType = new GraphQLObjectType({
	name: "ProductType",
	fields: () => ({
		_id: {type: new GraphQLNonNull(GraphQLString)},
		title: {type: new GraphQLNonNull(GraphQLString)},
		basePrice: {type: new GraphQLNonNull(GraphQLInt)},
		imageSrc: {type: GraphQLString},
		description: {type: GraphQLString},
		popularity: {type: GraphQLInt}
	})
});
module.exports = ProductType;