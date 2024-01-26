const axios = require('axios');

async function getUserData(){

  const response = await axios.get('https://fakestoreapi.com/users');

  const userData = response.data;

  return userData;

}

module.exports = getUserData;