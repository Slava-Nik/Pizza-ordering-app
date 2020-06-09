const Product = require("../data/models/Product");

exports.home = (req, res) => {
	res.status(200).send("<h2>Nik's pizza server app</h2>");
};

//Stub. For production AWS instances - use migrations.
exports.fillDatabaseWithDefaultProducts =  async (req,res) => {
	const products = [
		{
			title: "Pepperoni Hot Pepper",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
			basePrice: 11,
			popularity: 8,
		},
		{
			title: "Cheese",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
			basePrice: 10,
			popularity: 5,
		},
		{
			title: "Super meat",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/10922591-92d0-4965-9d13-5855b855a29e.jpg",
			basePrice: 15,
			popularity: 10,
		},
		{
			title: "Margherita",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
			basePrice: 8,
			popularity: 1,
		},
		{
			title: "Mexican",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/3354e3c2-8ce0-4d64-a11d-eb4c455b29c6.jpg",
			basePrice: 10,
			popularity: 4,
		},
		{
			title: "Spanish chorizo sausages",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg",
			basePrice: 11,
			popularity: 9,
		},
		{
			title: "Four cheeses",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/7d770266-c779-4e9d-b2bf-aa741de13bed.jpg",
			basePrice: 12,
			popularity: 10,
		},
		{
			title: "Vegetable pizza",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
			basePrice: 8,
			popularity: 2,
		},
		{
			title: "Ham and mushrooms",
			imageSrc: "https://cdn.dodostatic.net/static/Img/Products/b1ffa66f2ebb4e959122e54eaa071109_584x584.jpeg",
			basePrice: 10,
			popularity: 8,
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