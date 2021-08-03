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
import { Redirect } from 'react-dom'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/me")
      if (res.ok) {
        const json = await res.json()
        setUser(json)
      }
    }
    getUser()
  }, [])

  // if (!user) return <Redirect to="/login" />;

  return (
    <div className="App">
      <NavBar user = {user}/>

      <Switch>
        <Route exact path = "/matches" component={() => <Matches />}/>
          {/* {user ? <Matches /> : <Redirect to="/login" />} */}
        {/* </Route> */}
        <Route exact path = "/profile" component={() => <Profile />}/>
          {/* {user ? <Profile /> : <Redirect to="/login" />} */}
        {/* </Route> */}
        <Route exact path = "/login" component={() => <Login onLogin={setUser}/>}/>
          {/* <Login /> */}
        {/* </Route> */}
        <Route exact path = "/" component={() => <Swipe />}/>
          {/* {user ? <Swipe /> : <Redirect to="/login" />}
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
