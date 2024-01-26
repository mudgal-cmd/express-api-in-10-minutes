const userData = require('./data/user');

const productData = require('./data/products');

userData().then(data => {
  console.log(data);
}).catch(err => console.log(`Error: ${err}`));

productData().then(data => {
  console.log(data);
}).catch(err => console.log(`Error: ${err}`));