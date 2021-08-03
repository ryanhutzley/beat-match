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
import { Redirect } from 'react-router-dom'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  let history = useHistory()

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/me")
      if (res.ok) {
        const json = await res.json()
        setUser(json)
        history.push("/")
      }
    }
    getUser()
  }, [])

  async function logOut() {
    const res = await fetch("/logout", {
      method: "DELETE"
    })
    if (res.ok) {
      setUser(null)
      history.push("/login")
    }
  }

  return (
    <div className="App">
      <NavBar user = {user} logOut = {logOut}/>

      <Switch>
        <Route exact path = "/matches">
          {user ? <Matches /> : <Redirect to="/login" />}
        </Route>
        <Route exact path = "/profile">
          {user ? <Profile user={user}/> : <Redirect to="/login" />}
        </Route>
        <Route exact path = "/login">
          <Login onLogin={setUser}/>
        </Route> 
        <Route exact path = "/">
          {user ? <Swipe /> : <Redirect to="/login" />}
         </Route>
      </Switch>
    </div>
  );
}

export default App;
