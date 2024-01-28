const express = require('express');

const app = express();

const authRouter = require('./routes/auth-routes');

const mainRequestsRouter = require('./routes/app-requests-routes');

const cookieParser = require('cookie-parser');

// app.use(cookieParser());

app.use(cookieParser('secret-key'));

app.use('/login', authRouter);

app.use('/Users', mainRequestsRouter);

app.use('/Products', mainRequestsRouter);

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...');
});