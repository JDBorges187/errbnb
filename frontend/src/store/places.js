import { csrfFetch } from "./csrf"
import moment from 'moment'

const LOAD_PLACES = 'places/LOAD_PLACES'
const LOAD_DETAILS = 'places/GET_DETAILS'
const ADD_PLACE = 'places/ADD_PLACE'

const loadPlaces = list => ({
    type: LOAD_PLACES,
    list,
})

const addOnePlace = place => ({
    type: ADD_PLACE,
    place
})

const loadDetails = place => ({
    type: LOAD_DETAILS,
    place
})

export const getPlaces = () => async dispatch => {

    const res = await fetch('/api/places');

    if (!res.ok) throw res;

    const list = await res.json();

    // console.log(list)

    dispatch(loadPlaces(list));

    // return res;

}

export const getQueriedPlaces = ({startDate, endDate}) => async dispatch => {

    const startDateStr = moment(startDate).format();
    const endDateStr = moment(endDate).format();

    const res = await csrfFetch(`/api/places/search`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({startDate, endDate})
    });

    if (!res.ok) throw res;

    const list = await res.json();

    // console.log(list)

    dispatch(loadPlaces(list));

    // return res;

}

export const getDetails = (id) => async dispatch=> {
    const res = await fetch(`/api/places/${id}`);

    if (!res.ok) throw res;

    const place = await res.json();

    dispatch(loadDetails(place));
    
    return place;
}

export const createPlace = newPlace => async dispatch => {
    const res = await csrfFetch('/api/places', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlace)
    })

    if (!res.ok) throw res;
    const resPlace = await res.json();

    dispatch(addOnePlace(resPlace))

    return resPlace;
}

const initialState = { list: {}, details: {} }

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PLACES: {
            return { ...state, list: action.list }
        }
        case ADD_PLACE: {
            return {...state, list: {...state.list, [action.place.id]: action.place}}
        }
        case LOAD_DETAILS: {
            return {...state, details: {...state.details, [action.place.id]: action.place}}
        }
        default: return state;
    }
}

export default placesReducer;