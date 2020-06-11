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
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
			basePrice: 11,
			popularity: 8,
			description: "Pepperoni Hot Pepper description",
			categories: ["Hot"]
		},
		{
			title: "Cheese",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
			basePrice: 10,
			popularity: 5,
			description: "Cheese description",
			categories: ["Cheese"]
		},
		{
			title: "Super meat",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/10922591-92d0-4965-9d13-5855b855a29e.jpg",
			basePrice: 15,
			popularity: 10,
			description: "Super meat description",
			categories: ["Meat"]
		},
		{
			title: "Margherita",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
			basePrice: 8,
			popularity: 1,
			description: "Margherita description",
			categories: ["Tomato", "Vegetarian"]
		},
		{
			title: "Mexican",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/3354e3c2-8ce0-4d64-a11d-eb4c455b29c6.jpg",
			basePrice: 10,
			popularity: 4,
			description: "Mexican description",
			categories: ["Hot", "Meat"]
		},
		{
			title: "Spanish chorizo sausages",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg",
			basePrice: 11,
			popularity: 6,
			description: "Spanish chorizo sausages description",
			categories: ["Hot", "Meat"]
		},
		{
			title: "Four cheeses",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/7d770266-c779-4e9d-b2bf-aa741de13bed.jpg",
			basePrice: 12,
			popularity: 9,
			description: "Four cheeses description",
			categories: ["Cheese"]
		},
		{
			title: "Vegetable pizza",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
			basePrice: 8,
			popularity: 2,
			description: "Vegetable pizza description",
			categories: ["Vegetarian"]
		},
		{
			title: "Ham and mushrooms",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/b1ffa66f2ebb4e959122e54eaa071109_584x584.jpeg",
			basePrice: 10,
			popularity: 8,
			description: "Ham and mushrooms description",
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