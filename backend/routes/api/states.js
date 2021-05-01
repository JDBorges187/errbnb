const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { City, State } = require('../../db/models');

router.get('/', asyncHandler(async (req, res, next) => {

    // console.log('test')
    const states = await State.findAll({
        attributes: ['id', 'name'],
        order: [['name', 'ASC']]
    });

    const statesObj = {}

    states.forEach(state=>{
        statesObj[state.id] = state;
    })

    res.json(statesObj);

}))

router.get('/:id/cities', asyncHandler(async(req,res,next) => {
    const stateId = req.params.id;

    const state = await State.findByPk(stateId, {
        attributes: ['id','name'],
        include: {
            model: City,
            attributes: ['id','name']
        }
    })

    const cities = {};

    state.Cities.forEach(city=> cities[city.id] = city.name)

    res.json(cities)
}));




module.exports = router;