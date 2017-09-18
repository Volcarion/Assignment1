# Getting MEAN Chapter 4 modified

This is **Simon Holmes** code brought down from branch location chapter-04 and modified to add 3 pizza locations.

1. First brought down Simon Holmes code
2. Then added an additional list page with pizza locations
3. Then changed the bootstrap css

[Simon Holmes' Getting Mean Repository](https://github.com/simonholmes/getting-MEAN)

```javascript
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
```