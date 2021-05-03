import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import * as placeActions from '../../store/places'

import "./PlacesDetail.css"

function PlacesDetailPage() {
    const {placeId} = useParams();
    const dispatch = useDispatch();

    const place = useSelector(state => state.places.details[placeId])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(placeActions.getDetails(placeId))
        .then(data=> {
            setIsLoaded(true)
        })
    }, [dispatch, placeId])

    if(!isLoaded || !place) return (<div className="details">
        <h1 className="loading__title">Loading...</h1>
    </div>)

    

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
                    <button className="property__book">Book this Place</button>
                </div>
            </div>

        </div>
    )
}

export default PlacesDetailPage
