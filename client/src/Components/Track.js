import ReactPlayer from "react-player"
import React from "react"
import { Badge } from "react-bootstrap"


function Track({ trackData, profileTrack }) {

    console.log(trackData)
    console.log(profileTrack)

    let track = {}
    trackData ? track = trackData : track = profileTrack

    return (
        ReactPlayer.canPlay(track.song_url) ? (
            <div style={{width: '80%', margin: 'auto'}}>
                <br></br>
                {trackData ? <h4>Posted by: {trackData.user.username}</h4> : null}
                <ReactPlayer
                url = {trackData ? `${trackData.song_url}` :  `${profileTrack.song_url}`}
                width = '100%'
                height = '50%'
                config = {{ 
                    soundcloud: {
                    options: {
                        sharing: true
                }
                    }
                }}
                />
                {trackData ? (
                trackData.tags.map(tag => {
                    return (
                        <>
                            <h4 style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Badge bg="secondary">{tag.genre}</Badge>
                            </h4>
                            {" "}
                        </>
                    )
                })) : (
                profileTrack.tags.map(tag => {
                    return (
                        <>
                            <h4 style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Badge bg="secondary">{tag.genre}</Badge>
                            </h4>
                            {" "}
                        </>
                    )
                })
                )
            }
                
            </div>) : null
    )
}

export default Track


