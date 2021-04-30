import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'
import './PlacesForm.css';


function PlacesFormPage() {
    const sessionUser = useSelector(state => state.session.user)
    const [title, setTitle] = useState(''); //*
    const [price, setPrice] = useState(0); //*
    const [bedrooms, setBedrooms] = useState(0); //*
    const [bathrooms, setBathrooms] = useState(0); //*
    const [beds, setBeds] = useState(0); //*
    const [placeType, setPlaceType] = useState('1');
    const [arrangement, setArrangement] = useState('1');
    const [description, setDescription] = useState('');
    const [spotPhotos, setSpotPhotos] = useState('');
    const [cityId, setCityId] = useState('1');
    const [stateId, setStateId] = useState('1');
    const [errors, setErrors] = useState([]);

    if (!sessionUser) return (
        <Redirect to='/' />
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        // console.log({
        //     title,
        //     price,
        //     bedrooms,
        //     bathrooms,
        //     beds,
        //     placeType,
        //     arrangement,
        //     description,
        //     spotPhotos,
        // })
    }
    return (
        <div className="places-form-holder">
            <form className="places-form" onSubmit={handleSubmit}>
                <h2>Host Your Place!</h2>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Listing Title
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Price
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Bedrooms
                    <input
                        type="number"
                        min='0'
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Bathrooms
                    <input
                        type="number"
                        min='0'
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Beds
                    <input
                        type="number"
                        min='0'
                        value={beds}
                        onChange={(e) => setBeds(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Entire Place
                    <input
                        type="text"
                        value={arrangement}
                        onChange={(e) => setArrangement(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Property Type
                    <input
                        type="text"
                        value={placeType}
                        onChange={(e) => setPlaceType(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Upload a Photo
                    <input
                        type="test"
                        value={spotPhotos}
                        onChange={(e) => setSpotPhotos(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">List Your Place</button>
            </form>
        </div>
    )
}

export default PlacesFormPage;
