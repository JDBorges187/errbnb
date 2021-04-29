const csv = require('csv-parser');
const fs = require('fs');
// const { User, State, City, PlaceType } = require('../db/models')

async function run() {
    // let florida = await State.findOne({
    //     where: {
    //         isoCode: 'FL'
    //     }
    // })


    // console.log(florida)

    // let floridaCities = await City.findAll({
    //     where: {
    //         id: florida.id
    //     }
    // })
    // console.log(floridaCities)

    // let users = await User.findAll();

    let arr = [];
    let count = 1;

    fs.createReadStream('./places.csv')
        .pipe(csv())
        .on('data', (row) => {
            row.userId = count;
            count++
            row.stateId = null;
            row.cityId = null;
            delete row.state;
            delete row.city;
            arr.push(row);
        })
        .on('end', () => {
            console.log(arr);
        });


}

run();