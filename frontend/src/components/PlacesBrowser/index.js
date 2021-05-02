import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as placesActions from '../../store/places'
import { useDispatch, useSelector } from 'react-redux'
import './Places.css'

function PlacesBrowser() {
    const dispatch = useDispatch();
    const places = useSelector(state => {
       return Object.keys(state.places.list).map(id=>state.places.list[id])
    })
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(placesActions.getPlaces()).then(() => setIsLoaded(true))
    }, [dispatch])

    if (!places || !isLoaded) return (<h1>Loading...</h1>)

    return (
        <div className="places">
            <div className="cards">
                {places.map(place=>(
                    <Link key={place.id} to={`/places/${place.id}`} className="card">
                    <div style={{ backgroundImage: `url('${place.spotPhotos}')` }} className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            {place.title}
                        </div>
                        <div className="card__info">
                            {`${place.bedrooms} Bedrooms | ${place.bathrooms} Bathrooms | ${place.beds} Beds`}
                        </div>
                        <div className="card__book">BOOK</div>
                    </div>
                </Link>))}
            </div>
        </div>
    )
}

export default PlacesBrowser
