import React from 'react'

export default function MatchCard(props) {
    const {id, username, image_url, bio, deleteMatch} = props

    return (
        
        <div className="col-md-4 mt-4">
            <div className="profile-card profile-card-5">
                <div className="card-img-block">
                    <img className="card-img-top" src={image_url} alt="Profile" height="300px"/>
                </div>
                <div className="card-body pt-0">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{bio}</p>
                
                </div>
            </div>
            <button onClick={e => deleteMatch(id)} type="button" className="btn btn-outline-danger btn-sm"><strong>Remove Match</strong></button>
        </div>
        
    )
}
