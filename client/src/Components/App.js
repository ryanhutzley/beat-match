import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
//importing Components
import NavBar from './NavBar';
import Matches from './Matches';
import Swipe from './Swipe';
import Login from './Login';
import Profile from './Profile';

//importing react modules
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path = "/matches" component = {()=> <Matches/>} />
        <Route path = "/profile" component = {()=> <Profile/>} />
        <Route path = "/login" component = {()=> <Login/>} />
        <Route path = "/" component = {()=> <Swipe/>} />
      </Switch>
    </div>
  );
}

export default App;
