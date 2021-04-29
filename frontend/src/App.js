import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import Navigation from "./components/Navigation";
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Container from '@material-ui/core/Container'


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
            <Container fixed>

              <LoginFormPage />
            </Container>
          </Route>
          <Route path="/signup">
            <Container fixed>

              <SignupFormPage />
            </Container>
          </Route>
          <Route path="/places">
            <Container fixed>
              <h1>Hello from Places</h1>
            </Container>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
