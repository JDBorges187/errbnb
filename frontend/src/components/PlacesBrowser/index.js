import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as placeActions from '../../store/places'
import { useDispatch, useSelector } from 'react-redux'
import './Places.css'

function PlacesBrowser() {
    const dispatch = useDispatch();
    const places = useSelector(state => {
       return Object.keys(state.places.list).map(id=>state.places.list[id])
    })
    const [city, setCity] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(placeActions.getPlaces()).then(() => setIsLoaded(true))
    }, [dispatch])

    if (!places || !isLoaded) return (<div className="places"><h1>Loading...</h1></div>)

    return (
        <div className="places">
            <fieldset className="places__title">
                <h1>Stays in Florida</h1>
            <input value={city}
                onChange={(e)=>setCity(e.target.value)}></input>
            </fieldset>
            <div className="cards">
                {places.map(place=>(
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
