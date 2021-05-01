import {csrfFetch} from "./csrf"

const LOAD_PLACES = 'places/LOAD_PLACES'

const loadPlaces = list => ({
    type: LOAD_PLACES,
    list,
})

export const getPlaces = () => async dispatch => {
    const res = await fetch('/api/places');

    if (!res.ok) throw res;

    const list = await res.json();

    console.log(list)

    dispatch(loadPlaces(list));

    // return res;

}

const initialState = { list: {}, details: {}}

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PLACES: {
            return {...state, list: action.list}
        }
        default: return state;
    }
}

export default placesReducer;