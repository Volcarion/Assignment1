/* GET 'home' page */
module.exports.pizzaplaces = function(req, res) {
    res.render('pizza-locations-list', {
        title: 'Pizza Locations',
        pageHeader: {
            title: 'Pizza Locator',
            strapline: 'Find a place to get pizza near you!'
        },
        sidebar: "Can't decide where to go for pizza? Maybe these reviews can help you make a decision.",
        locations: [{
            name: 'Hungry Howie\'s Pizza',
            address: '3300 S Washington St, Amarillo, TX 79110',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Pizza 9',
            address: '2648 SW 34th Ave, Amarillo, TX 79109',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: '575 Pizzeria',
            address: '2803 Civic Cir, Amarillo, TX 79109',
            rating: 5,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.pizzalocationInfo = function(req, res) {
    res.render('pizza-location-info', {
        title: 'Hungry Howie\'s Pizza',
        pageHeader: {
            title: 'Hungry Howie\'s Pizza'
        },
        sidebar: {
            context: 'is on Pizza Locator because it is a pizza chain known for flavored crusts.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Hungry Howie\'s Pizza',
            address: '3300 S Washington St, Amarillo, TX 79110',
            rating: 4,
            facilities: ['Quick Bite', 'Casual', 'College Students'],
            coords: {
                lat: 35.179031,
                lng: -101.848946
            },
            openingTimes: [{
                days: 'Sunday - Thursday',
                opening: '11:00am',
                closing: '11:00pm',
                closed: false
            }, {
                days: 'Friday & Saturday',
                opening: '11:00am',
                closing: '12:00am',
                closed: false
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};