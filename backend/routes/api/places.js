const express = require('express');
const asyncHandler = require('express-async-handler');
const router =express.Router();

const { Place, User, PlaceType, City, State } = require('../../db/models');

router.get('/', asyncHandler(async (req, res, next) => {
    
    // console.log('test')
    const places = await Place.findAll({
        include: [PlaceType, City, State]
    });
    
    const placesObj = {};
    places.forEach(place=>{
        placesObj[place.id] = place;
    })

    res.json(placesObj);

}))

module.exports = router;