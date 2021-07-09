import React, { useState, useEffect } from 'react';
import './App.css';
import RecipesComponent from './components/RecipesComponent';
import Navbar from './components/Navbar/Navbar';
import SignupForm from './components/SignupForm/Form';
import LoginForm from './components/LoginForm/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import UserScreen from './components/screens/UserScreen';
import LandingPage from './components/LandingPage';

function App() {
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }

    console.log(loggedin);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
        <LandingPage />
        <Switch>
          <PrivateRoute exact path="/user" component={UserScreen} />
          <Route path="/" exact component={RecipesComponent} />
          <Route path="/login">
            <LoginForm loggedin={loggedin} setLoggedin={setLoggedin} />
          </Route>
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
