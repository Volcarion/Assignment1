var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlPizza = require('../controllers/pizzalocations');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

/* Pizza pages */
router.get('/pizzalocations', ctrlPizza.pizzaplaces);
router.get('/pizzainfo' , ctrlPizza.pizzalocationInfo);
module.exports = router;
