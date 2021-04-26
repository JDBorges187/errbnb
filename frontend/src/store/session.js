import { csrfFetch } from "./csrf"

// Constants
const LOAD_USER = 'session/LOAD_USER'
const REMOVE_USER = 'session/REMOVE_USER'



const loadUser = user => ({
    type: LOAD_USER,
    user,
})

const removeUser = () => ({
    type: REMOVE_USER,
})

export const login = (user) => async dispatch => {
    const { email, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    })

    if (!res.ok) throw res;

    const data = await res.json();

    dispatch(loadUser(data.user));

    return res;
}

export const signup = (payload) => async dispatch=> {
    const {
        firstName,
        lastName,
        birthDate,
        email,
        password
    } = payload;
    const res = await csrfFetch('/api/users',{
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            birthDate,
            email,
            password
        })
    })
    
    if (!res.ok) throw res;
    const data =await res.json();

    dispatch(loadUser(data.user))

    return res
}

export const logout = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })

    if (!res.ok) throw res;

    // const msg = await res.json();
    // console.log(msg);

    dispatch(removeUser())
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(loadUser(data.user));
    return response;
  };


const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER: {
            // console.log(action.user);
            return { ...state, user: action.user };
        }
        case REMOVE_USER: {
            const newState = { ...state };
            newState.user = null;
            return newState;
        }
        default: return state;
    }
}

export default sessionReducer;