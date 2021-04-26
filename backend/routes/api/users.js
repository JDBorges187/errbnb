const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

//! Find out if user is eighteen

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const maxDate = new Date(year - 18, month, day).toISOString().split('T')[0];

//! Validate Signup Form Inputs:

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Please provide a first name.'),
    check('firstName')
        .not()
        .isEmail()
        .withMessage('First name cannot be an email.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Please provide a last name.'),
    check('lastName')
        .not()
        .isEmail()
        .withMessage('Last name cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('birthDate')
        // .toDate()
        .exists({ checkFalsy: true })
        .isBefore(maxDate)
        .withMessage('You must be 18 or older to join'),
    handleValidationErrors,
];



// P-P-P-P-POST-IT

router.post('/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, firstName, lastName, birthDate } = req.body;
        // console.log(birthDate)
        const user = await User.signup({
            email,
            password,
            firstName,
            lastName,
            birthDate
        });

        await setTokenCookie(res, user);

        return res.json({ user });

    }))

module.exports = router;