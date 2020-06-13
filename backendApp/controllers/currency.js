const axios = require("axios");

exports.getCurrencyRate =  async (req,res) => {
	try{
		//TODO: cache API responses in a key-value storage
		const  response = await axios.get("https://api.exchangeratesapi.io/latest");
		const {data} = response;
		if(data.rates){
			const result = {
				usd: data.rates.USD,
				rub: data.rates.RUB
			}
			res.status(200).send(result);
		}else{
			res.status(404).send("No currency rates found");
		}
	}catch(err){
		console.error(err);
		res.status(500).send("An error occured while fetching currency rate");
	}
};