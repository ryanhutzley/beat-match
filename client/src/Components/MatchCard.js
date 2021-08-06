import React from 'react'

export default function MatchCard(props) {
     console.log(props.id)
    function deleteMatch(){
        fetch(`/matches/${props.id}`, {
            method: "DELETE"
          })
          .then(res => console.log(res))
    }
    return (
        
        <div class="col-md-4 mt-4">
            <div class="profile-card profile-card-5">
                <div class="card-img-block">
                    <img class="card-img-top" src={props.image_url} alt="Card image cap"/>
                </div>
                <div class="card-body pt-0">
                <h5 class="card-title">{props.username}</h5>
                <p class="card-text">{props.bio}</p>
                
                </div>
            </div>
            <button onClick={deleteMatch} type="button" className="btn btn-outline-danger btn-sm"><strong>Remove Match</strong></button>
        </div>
        
    )
}
