import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import * as placeActions from '../../store/places'
import "react-dates/initialize";
import { DateRangePicker } from 'react-dates';
import * as bookingActions from '../../store/bookings'

import "./PlacesDetail.css"

function PlacesDetailPage() {
    const sessionUser = useSelector(state => state.session.user);
    const { placeId } = useParams();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null)

    const place = useSelector(state => state.places.details[placeId])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(placeActions.getDetails(placeId))
            .then(data => {
                setIsLoaded(true)
            })
    }, [dispatch, placeId])

    if (!isLoaded || !place) return (<div className="details">
        <h1 className="loading__title">Loading...</h1>
    </div>)

    function setState({ startDate, endDate }) {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (startDate && endDate) dispatch(bookingActions.createBooking({ placeId, startDate, endDate }))
    }


    return (
        <div className="details">
            <div className="property__container">
                <div className="property__preview">
                    <img src={place.spotPhotos} alt="Property Preview" />
                </div>
                <div className="property__details">
                    <h1 className="property__title">{place.title}</h1>
                    <h3 className="property__host">Hosted by {place.User.firstName}</h3>
                    <ul className="property__bedbaths">
                        <li>{place.bedrooms} Bedrooms</li>
                        <li>{place.bathrooms} Bathrooms</li>
                        <li>{place.beds} Beds</li>
                    </ul>
                    <p className="property__desc">
                        {place.description}
                    </p>
                    {sessionUser && (

                        <form className="prop-booking-form"
                            onSubmit={handleSubmit}>
                            <DateRangePicker
                                startDate={startDate} // momentPropTypes.momentObj or null,
                                startDateId="react__startDate" // PropTypes.string.isRequired,
                                endDate={endDate} // momentPropTypes.momentObj or null,
                                endDateId="react__endDate" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,

                            />
                            <button className="property__book">Book this Place</button>
                        </form>
                    )}
                </div>
            </div>

        </div>
    )
}

export default PlacesDetailPage
