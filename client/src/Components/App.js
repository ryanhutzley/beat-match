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
  const [swipeUsers, setSwipeUsers] = useState([])
  const [tags, setTags] = useState([])
  let history = useHistory()


  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

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

  useEffect(() => {
    async function getSwipeUsers() {
      const res = await fetch("/users")
      if (res.ok) {
        const json = await res.json()
        let array = shuffle(json)
        setSwipeUsers(array)
      }
    }
    getSwipeUsers()
  }, [user])

  useEffect(() => {
    async function getTags() {
      const res = await fetch("/tags")
      if (res.ok) {
        const json = await res.json()
        setTags(json)
      }
    }
    getTags()
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
      {user ?
      <NavBar user = {user} logOut = {logOut}/>
      : null}

      <Switch>
        <Route exact path = "/matches">
          {user ? <Matches user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path = "/profile">
          {user ? <Profile user={user} tags={tags}/> : <Redirect to="/login" />}
        </Route>
        <Route exact path = "/login">
          <Login onLogin={setUser}/>
        </Route> 
        <Route exact path = "/">
          {user ? <Swipe swipeUsers={swipeUsers}/> : <Redirect to="/login" />}
         </Route>
      </Switch>
    </div>
  );
}

export default App;
