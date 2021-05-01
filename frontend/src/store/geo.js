import { csrfFetch } from "./csrf";

//Constants
const LOAD_STATES = 'geo/LOAD_STATES'
const LOAD_CITIES = 'geo/LOAD_CITIES'

const loadStates = states => ({
    type: LOAD_STATES,
    states
})

const loadCities = cities => ({
    type: LOAD_CITIES,
    cities
})

export const getStates = () => async dispatch => {
    const response = await csrfFetch('/api/states')

    if (response.ok) {
        const list = await response.json();
        dispatch(loadStates(list))

    }
}

export const getCities = (stateId) => async dispatch => {
    const response = await csrfFetch(`/api/states/${stateId}/cities`)

    if (!response.ok) throw response;

    const cities = await response.json();
    dispatch(loadCities(cities))
        
}

const initialState = {
    states: {},
    cities: {} 
}

const geoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STATES: {
            return { ...state, states: action.states }
        }
        case LOAD_CITIES: {
            return {...state, cities: action.cities}
        }
        default: return state;
    }
}

export default geoReducer;