import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as geoActions from '../../store/geo'
import { Redirect } from 'react-router-dom'
import * as placeActions from '../../store/places'
import './PlacesForm.css';


function PlacesFormPage() {
    const sessionUser = useSelector(state => state.session.user)
    const geoStates = useSelector(state => state.geo.states);
    const geoCities = useSelector(state=> state.geo.cities);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(''); //*
    const [price, setPrice] = useState(0); //*
    const [bedrooms, setBedrooms] = useState(0); //*
    const [bathrooms, setBathrooms] = useState(0); //*
    const [beds, setBeds] = useState(0); //*
    // const [placeType, setPlaceType] = useState('1');
    // const [arrangement, setArrangement] = useState('1');
    const [description, setDescription] = useState('');
    const [spotPhotos, setSpotPhotos] = useState('');
    const [cityId, setCityId] = useState('1');
    const [showCities, setShowCities] = useState(false);
    const [stateId, setStateId] = useState('0');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(geoActions.getStates())
    }, [dispatch])

    useEffect(()=>{
        if (stateId !== "0") {
            dispatch(geoActions.getCities(stateId))
            setShowCities(true)
        }
    },[stateId, dispatch])
    

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    if (!geoStates) return null;


    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        const res = dispatch(placeActions.createPlace({
            stateId,
            cityId,
                title,
                price,
                bedrooms,
                bathrooms,
                beds,
                description,
                spotPhotos,
            }))

        console.log(res)
    }
    return (
        <div className="host">

            <div className="places-form-holder">
                <form className="places-form" onSubmit={handleSubmit}>
                    <h2>Host Your Place!</h2>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        State:
                        <select value={stateId} 
                            onChange={(e)=>setStateId(e.target.value)}>
                            <option value="0">Select a State:</option>
                            {Object.keys(geoStates).map((id)=>{
                                return (
                                    <option key={id} 
                                    value={id}>{geoStates[id].name}</option>
                                )
                            })}
                        </select>
                    </label>
                    {geoStates && (
                        <label>
                        City:
                        <select value={cityId} 
                            onChange={(e)=>setCityId(e.target.value)}>
                            {Object.keys(geoCities).map((id)=>{
                                return (
                                    <option key={id} 
                                    value={id}>{geoCities[id]}</option>
                                )
                            })}
                            {/* <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option> */}
                        </select>
                    </label>
                    )}
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
                    {/* <label>
                        Property Type
                    <input
                            type="text"
                            value={placeType}
                            onChange={(e) => setPlaceType(e.target.value)}
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
                    </label> */}
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
        </div>

    )
}

export default PlacesFormPage;
