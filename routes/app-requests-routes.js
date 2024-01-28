const express = require('express');

const router = express.Router();

const getProductsController = require('../controller/app-requests-controller');

// const cookieParser = require('cookie-parser');

// express().use(cookieParser());

router.route('/').get(getProductsController);

module.exports = router;