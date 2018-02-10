'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('middle-WHERE');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'wooooOOOOt' });
});

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Vue bones ${port}`);
