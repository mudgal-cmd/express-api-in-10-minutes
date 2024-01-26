const axios = require('axios');

async function getProductData(){

  const response = await axios.get('https://fakestoreapi.com/products');

  const productData = response.data;

  return productData;

}

module.exports = getProductData;