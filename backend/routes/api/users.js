const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

// P-P-P-P-POST-IT

router.post('/', asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName, birthDate } = req.body;
    console.log(birthDate)
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