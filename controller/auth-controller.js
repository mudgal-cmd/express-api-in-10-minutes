const authController = (req, res)=>{

  res.cookie('loginCookie', 'authorized', {expires: new Date(Date.now()+90000)}); //created a cookie to check if the user is authorized.

  res.cookie('anotherCookie', 'This is signed cookie', {signed: true});

  res.status(200).send('User is authorized');

}

module.exports = authController;