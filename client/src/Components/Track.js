import ReactPlayer from "react-player"
import React from "react"


function Track({ trackData }) {

    return (
        ReactPlayer.canPlay(trackData.song_url) ? (
            <div>
                <ReactPlayer
                url = {`${trackData.song_url}`}
                width = '50%'
                height = '30%'
                config = {{ 
                    soundcloud: {
                    options: {
                        sharing: true
                }
                    }
                }}
                />
                {trackData.tags.map(tag => {
                    return <h3>{tag.genre}</h3>
                })}
            </div>) : null
    )
}

export default Track

{/* <iframe style={{'width': "60%"}}src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/790184338%3Fsecret_token%3Ds-wdydxoiUXyF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe style={{'width': "60%"}}src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/790184338%3Fsecret_token%3Ds-wdydxoiUXyF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe style={{'width': "60%"}}src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/790184338%3Fsecret_token%3Ds-wdydxoiUXyF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe style={{'width': "60%"}}src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/790184338%3Fsecret_token%3Ds-wdydxoiUXyF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> */}


