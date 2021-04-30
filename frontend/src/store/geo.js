import { csrfFetch } from "./csrf";

//Constants
const LOAD_STATES = 'geo/LOAD_STATES'

const loadStates = states => ({
    type: LOAD_STATES,
    states
})

export const getStates = () => async dispatch => {
    const response = await csrfFetch('/api/states')

    if (response.ok) {
        const list = await response.json();
        dispatch(loadStates(list))

    }
}

const initialState = {
    states: [],
    cities: [] 
}

const geoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STATES: {
            return { ...state, states: action.states }
        }
        default: return state;
    }
}

export default geoReducer;