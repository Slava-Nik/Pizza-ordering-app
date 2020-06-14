const Product = require("../data/models/Product");

exports.getAllProducts =  async (req,res) => {
	try{
		const products = await Product.find();
		res.status(200).send(products);
	}catch(err){
		console.error(err);
		res.status(500).send("An error occured while fetching product list");
	}
};

exports.getProductById =  async (req,res) => {
	const {id} = req.params;
	try{
		const product = await Product.findById(id);
		res.status(200).send(product);
	}catch(err){
		console.error(err);
		res.status(500).send(`An error occured while fetching product with id ${id}`);
	}
};

//Stub. For production AWS instances - use migrations.
exports.fillDatabaseWithDefaultProducts =  async (req,res) => {
	const products = [
		{
			title: "Pepperoni Hot Pepper",
			imageSrc: "/images/products/pepperoni-hot-pepper.jpg",
			basePrice: 11,
			popularity: 8,
			description: "Hot and spicy pepperoni, extra mozzarella, padrón pepper, tomato sauce",
			categories: ["Hot"]
		},
		{
			title: "Cheese",
			imageSrc: "/images/products/cheese.jpg",
			basePrice: 10,
			popularity: 5,
			description: "Classic cheese pizza. Increased portion of mozzarella, tomato sauce",
			categories: ["Cheese"]
		},
		{
			title: "Super meat",
			imageSrc: "/images/products/super-meat.jpg",
			basePrice: 15,
			popularity: 10,
			description: "Chicken, beef meatballs, spicy pepperoni, tomato sauce, spicy chorizo, mozzarella, bacon",
			categories: ["Meat"]
		},
		{
			title: "Margherita",
			imageSrc: "/images/products/margherita.jpg",
			basePrice: 8,
			popularity: 1,
			description: "Increased portion of mozzarella, tomatoes, Italian herbs, tomatoes, tomato sauce",
			categories: ["Tomato", "Vegetarian"]
		},
		{
			title: "Mexican",
			imageSrc: "/images/products/mexican.jpg",
			basePrice: 10,
			popularity: 4,
			description: "Chicken, tomato sauce, sweet pepper, red onion, mozzarella, hot jalapeno,  spicy chorizo, salsa sauce",
			categories: ["Hot", "Meat"]
		},
		{
			title: "Spanish chorizo sausages",
			imageSrc: "/images/products/spanish-chorizo-sausages.jpg",
			basePrice: 11,
			popularity: 6,
			description: "Spicy chorizo, mozzarella, red onion, tomato sauce, chipotle sauce",
			categories: ["Hot", "Meat"]
		},
		{
			title: "Four cheeses",
			imageSrc: "/images/products/four-cheeses.jpg",
			basePrice: 12,
			popularity: 9,
			description: "Increased portion of mozzarella, cheddar and Parmesan cheese mix, blue cheese, cream sauce",
			categories: ["Cheese"]
		},
		{
			title: "Vegetable pizza",
			imageSrc: "/images/products/vegetable-pizza.jpg",
			basePrice: 8,
			popularity: 2,
			description: "Italian herbs, tomato sauce, cheese cubes, mushrooms, sweet peppers, red onions, mozzarella, olives",
			categories: ["Vegetarian"]
		},
		{
			title: "Ham and mushrooms",
			imageSrc: "/images/products/ham-and-mushrooms.jpg",
			basePrice: 10,
			popularity: 8,
			description: "Ham, mushrooms, extra mozzarella, tomato sauce",
			categories: ["Meat"]
		},
	];
	try{
		await Product.insertMany(products);
		res.status(200).send("Done");
	}catch(err){
		console.error(err);
		res.status(500).send("An error occured", err);
	}
};