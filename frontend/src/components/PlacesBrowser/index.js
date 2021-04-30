import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as placesActions from '../../store/places'
import { useDispatch, useSelector } from 'react-redux'
import './Places.css'

function PlacesBrowser() {
    const dispatch = useDispatch();
    const [places, setPlaces] = useState([])
    const [isLoaded, setIsLoaded] = useState([])

    useEffect(() => {
        dispatch(placesActions.getPlaces())
            // .then(async (res) => {
            //     const data = await res.json();
            //     if (data) {
            //         setPlaces(data);
            //         setIsLoaded(true);
            //     }
            // });

        //console.log('Loaded')

    }, [dispatch])

    return (
        <div className="places">
            <div className="cards">
                <Link to="/" className="card">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            Stay at this Magificent Condo
                        </div>
                        <div className="card__info">
                            3 Beds | 2 Bedrooms | 1 Bath
                        </div>
                        <div className="card__book"> BOOK</div>
                    </div>
                </Link>
                <Link to="/" className="card">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            Stay at this Magificent Condo
                        </div>
                        <div className="card__info">
                            3 Beds | 2 Bedrooms | 1 Bath
                        </div>
                        <div className="card__book"> BOOK</div>
                    </div>
                </Link>
                <Link to="/" className="card">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            Stay at this Magificent Condo
                        </div>
                        <div className="card__info">
                            3 Beds | 2 Bedrooms | 1 Bath
                        </div>
                        <div className="card__book"> BOOK</div>
                    </div>
                </Link>
                <Link to="/" className="card">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            Stay at this Magificent Condo
                        </div>
                        <div className="card__info">
                            3 Beds | 2 Bedrooms | 1 Bath
                        </div>
                        <div className="card__book"> BOOK</div>
                    </div>
                </Link>
                <Link to="/" className="card">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            Stay at this Magificent Condo
                        </div>
                        <div className="card__info">
                            3 Beds | 2 Bedrooms | 1 Bath
                        </div>
                        <div className="card__book"> BOOK</div>
                    </div>
                </Link>
                <Link to="/" className="card">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <div className="card__title">
                            Stay at this Magificent Condo
                        </div>
                        <div className="card__info">
                            3 Beds | 2 Bedrooms | 1 Bath
                        </div>
                        <div className="card__book"> BOOK</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PlacesBrowser
