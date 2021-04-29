import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import './Navigation.css'


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        )
    } else {
        sessionLinks = (
            <>
                <NavLink className="nav__link" to='/login'>Log In</NavLink>
                <NavLink className="nav__link" to='/signup'>Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav>
            <ul id="nav">
                <NavLink className="nav__link"  exact to="/">Home</NavLink>
                <NavLink className="nav__link" to="/places">Places</NavLink>
            </ul>
                {isLoaded && sessionLinks}
        </nav>
    )
}


export default Navigation

