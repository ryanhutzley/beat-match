import React from 'react'

export default function MatchCard(props) {
     const {id, username, image_url, bio, deleteMatch} = props
    // function deleteMatch(){
    //     fetch(`/matches/${props.id}`, {
    //         method: "DELETE"
    //       })
    //       .then(res => console.log(res))
    // }
    return (
        
        <div class="col-md-4 mt-4">
            <div class="profile-card profile-card-5">
                <div class="card-img-block">
                    <img class="card-img-top" src={image_url} alt="Profile picture"/>
                </div>
                <div class="card-body pt-0">
                <h5 class="card-title">{username}</h5>
                <p class="card-text">{bio}</p>
                
                </div>
            </div>
            <button onClick={e => deleteMatch(id)} type="button" className="btn btn-outline-danger btn-sm"><strong>Remove Match</strong></button>
        </div>
        
    )
}
