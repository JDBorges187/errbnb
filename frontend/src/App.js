import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import Navigation from "./components/Navigation";
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import PlacesFormPage from './components/PlacesFormPage'
import PlacesBrowser from "./components/PlacesBrowser";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking/Booking";
import PlacesDetailPage from "./components/PlacesDetailPage";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  
  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/places" exact>
            <PlacesBrowser />
          </Route>
          <Route path="/places/:placeId">
            <PlacesDetailPage />
          </Route>
          <Route path="/host">
            <PlacesFormPage />
          </Route>
          <Route path="/booking" exact>
            <Booking/>
          </Route>
          <Route path="/" exact>
            <HomePage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
