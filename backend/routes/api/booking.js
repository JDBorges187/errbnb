const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator')
const router = express.Router();

const { Booking, User, Place } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

router.post('/', requireAuth,
    asyncHandler(async (req, res) => {
        const {placeId, startDate, endDate} = req.body;

        const booking = await Booking.create({
            userId: req.user.id,
            placeId,
            startDate,
            endDate
        })

        res.json(booking)


    }))

    router.get('/', requireAuth,
    asyncHandler(async(req,res,next) => {
        const userId = req.user.id;

        const bookings = await Booking.findAll({
            where: {
                userId
            }
        })

        res.json(bookings)
    }))


module.exports = router;