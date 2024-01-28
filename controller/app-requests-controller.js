const products = require('../data/products');

const getProducts = (req, res)=>{
  
  console.log(req.headers.cookie);
  
  console.log(req.cookies);

  console.log(req.cookies.loginCookie === 'authorized');

  if(req.cookies && req.cookies.loginCookie === 'authorized'){
    products().then(productData => {
      return res.status(200).json({success:true, data: productData});
    }).catch(err => console.log(err));
  }
  else{
    return res.status(401).json({success: false, msg: 'Unauthorized user'});
  }

    
  // res.status(200).json({success:true, data:})

}

module.exports = getProducts;