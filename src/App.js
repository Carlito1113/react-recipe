import React from 'react';
import './App.css';
import RecipesComponent from './components/RecipesComponent';
import Navbar from './components/Navbar/Navbar';
import SignupForm from './components/SignupForm/Form';
import LoginForm from './components/LoginForm/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={RecipesComponent} />
          <Route path="/signup" component={SignupForm} />
          <Route path='/login' component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
