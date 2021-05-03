import { csrfFetch } from "./csrf"

const LOAD_BOOKINGS = 'places/LOAD_BOOKINGS'
const ADD_BOOKING = 'places/ADD_BOOKING'

const loadBookings = list => ({
    type: LOAD_BOOKINGS,
    list,
})

const addOneBooking = booking => ({
    type: ADD_BOOKING,
    booking
})

export const createBooking = ({placeId, startDate, endDate }) => async dispatch => {
    const res = await csrfFetch(`/api/booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({placeId, startDate, endDate})
    });

    if (!res.ok) throw res;

    const booking = await res.json()

    console.log("SUCCESS")

    dispatch(addOneBooking(booking));
}

const initialState = { list: {} }

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOKINGS: {
            return { ...state, list: action.list }
        }
        case ADD_BOOKING: {
            return {...state, list: {...state.list, [action.booking.id]: action.booking}}
        }
        default: return state;
    }
}

export default bookingsReducer;

