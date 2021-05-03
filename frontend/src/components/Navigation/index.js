import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import * as sessionActions from '../../store/session';

import ProfileButton from './ProfileButton'
import './Navigation.css'


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(sessionActions.demo())
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink className="nav__link" to='/host'>Become a Host</NavLink>
                <NavLink className="nav__link" to='/bookings'>My Bookings</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        )
    } else {
        sessionLinks = (
            <>
                <NavLink onClick={handleClick} 
                    classname="nav__link" to='/#'>Demo</NavLink>
                <NavLink className="nav__link" to='/login'>Log In</NavLink>
                <NavLink className="nav__link" to='/signup'>Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav>
            <ul id="nav">
                <NavLink className="nav__link logo"  exact to="/">Err(bnb)</NavLink>
                <NavLink className="nav__link" to="/places">Places</NavLink>
            </ul>
                {isLoaded && sessionLinks}
        </nav>
    )
}


export default Navigation

