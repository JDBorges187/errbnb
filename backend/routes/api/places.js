const express = require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator')
const router = express.Router();

const { Place, User, PlaceType, City, State } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const validateNewPlace = [
    check('stateId')
        .exists({ checkFalsy: true })
        .withMessage('You must select a State to Continue'),
    handleValidationErrors
]

router.post('/', validateNewPlace, requireAuth,
    asyncHandler(async (req, res) => {
        const {
            stateId,
            cityId,
            title,
            price,
            bedrooms,
            bathrooms,
            beds,
            description,
            spotPhotos
        } = req.body;

        console.log(req.user.id)

        const place = await Place.create({
            title,
            price,
            bedrooms,
            bathrooms,
            beds,
            spotPhotos,
            description,
            userId: req.user.id,
            stateId,
            cityId
        })

        res.json({[place.id]: place})
    }))


router.get('/', asyncHandler(async (req, res, next) => {

    // console.log('test')
    const places = await Place.findAll({
        include: [PlaceType, City, State],
        limit: 6,
        order: ['createdAt','DESC']
    });

    const placesObj = {};
    places.forEach(place => {
        placesObj[place.id] = place;
    })

    res.json(placesObj);

}))



module.exports = router;