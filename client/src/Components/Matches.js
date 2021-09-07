import { Card } from 'react-bootstrap'
import MatchCard from './MatchCard'
import React, { useState, useEffect } from 'react';

function Matches(props) {
    const {user} = props
    const [matches, setMatches] = useState([])
    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        async function getMatches() {
          const res = await fetch("/getmatches")
          if (res.ok) {
            const json = await res.json()
            setMatches(json)
          }
        }
        getMatches()
        console.log("useEffectMatches")
      }, [deleteState])

      function deleteMatch(id){
        fetch(`/matches/${id}`, {
            method: "DELETE"
          })
          .then(res => console.log(res))
          .then(() => setDeleteState(!deleteState))
    }
    return (
        <div className="container">
            <div className="row">
                <h2 style={{marginTop: "20px"}}>{user.username}'s Matches</h2>
                <br></br>
                <br></br>
                <br></br>
                {matches.length === 0 ? <h5>You don't have any matches yet</h5> : matches.map((match, index) => <MatchCard key={index} deleteMatch={deleteMatch} {...match} user={user}/>)}
            </div>
        </div>
    )
}

export default Matches