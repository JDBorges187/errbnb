import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as placeActions from '../../store/places'
import { useDispatch, useSelector } from 'react-redux'
import "react-dates/initialize";
import { DateRangePicker } from 'react-dates';
import './Places.css'

function PlacesBrowser() {
    const dispatch = useDispatch();
    const places = useSelector(state => {
        return Object.keys(state.places.list).map(id => state.places.list[id])
    })
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(placeActions.getPlaces()).then(() => setIsLoaded(true))
    }, [dispatch])

    function setState({ startDate, endDate }) {
        setStartDate(startDate);
        setEndDate(endDate);
        if (startDate && endDate) dispatch(placeActions.getQueriedPlaces({startDate, endDate}))
        
    }

    if (!places || !isLoaded) return (<div className="places"><h1>Loading...</h1></div>)

    return (
        <div className="places">
            {/* <fieldset className="places__title"> */}
                <h1>Stays in Florida</h1>
                <form className="search">
                    <label>
                        Where are you going?
                        <input value={city}
                            onChange={(e) => setCity(e.target.value)}></input>
                    </label>
                    <DateRangePicker
                        startDate={startDate} // momentPropTypes.momentObj or null,
                        startDateId="react__startDate" // PropTypes.string.isRequired,
                        endDate={endDate} // momentPropTypes.momentObj or null,
                        endDateId="react__endDate" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                        
                    />
                </form>
            {/* </fieldset> */}
            <div className="cards">
                {places.map(place => (
                    <Link key={place.id} to={`/places/${place.id}`} className="card">
                        <div style={{ backgroundImage: `url('${place.spotPhotos}'), url('${'/media/coming-soon.png'}')` }} className="card__image"></div>
                        <div className="card__content">
                            <div className="card__state">
                                {`Entire Condo in ${place.City.name}, FL`}
                            </div>
                            <div className="card__title">
                                {place.title}
                            </div>
                            <div className="card__info">
                                {`${place.bedrooms} Bedrooms | ${place.bathrooms} Bathrooms | ${place.beds} Beds`}
                            </div>
                            <div className="card__price">{`$ ${place.price} / night`}</div>
                        </div>
                    </Link>))}
            </div>
        </div>
    )
}

export default PlacesBrowser
