import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import Track from './Track'

function Profile({ user }) {
    const [title, setTitle] = useState("")
    const [trackURL, setTrackURL] = useState("")
    const [tracks, setTracks] = useState([])
    const [tag1, setTag1] = useState("")
    const [tag2, setTag2] = useState("")
    const [tag3, setTag3] = useState("")
    const [tag4, setTag4] = useState("")
    const [tag5, setTag5] = useState("")
    const [tag6, setTag6] = useState("")
    
    useEffect(() => {
        async function getTracks() {
            const res = await fetch("/tracks")
            const tracksData = await res.json()
            setTracks(tracksData)
        }
        getTracks()
    }, [])
    
    async function addTrack(e) {
        e.preventDefault()
        let info = {
            user_id: user.id,
            title,
            song_url: trackURL
        }
        const res = await fetch("/tracks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        })
        const data = await res.json()
        if (res.ok) {
            // setTracks([...tracks, data])
            // setTitle("")
            // setTrackURL("")
        }
    }

    console.log(tracks)

    return (
        <div>
            <Form onSubmit={addTrack}>
                <Form.Group className="mb-3" type = "text">
                    <Form.Label>Track Title</Form.Label>
                    <Form.Control type="text" placeholder="Name of your track" value={title} onChange={e => setTitle(e.target.value)} />
                    <Form.Text className="text-muted">
                    Unleash your creativity
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" type = "text">
                    <Form.Label>Track Link</Form.Label>
                    <Form.Control type="text" placeholder="Link to your track" value={trackURL} onChange={e => setTrackURL(e.target.value)}/>
                </Form.Group>
               
                <Form.Group className="mb-3" type = "text">
                    <Form.Label>Track Tags</Form.Label>
                    <Form.Control type="text" placeholder="Tag 1" value={tag1} onChange={e => setTag1(e.target.value)}/>
                    <Form.Control type="text" placeholder="Tag 2" value={tag2} onChange={e => setTag2(e.target.value)}/>
                    <Form.Control type="text" placeholder="Tag 3" value={tag3} onChange={e => setTag3(e.target.value)}/>
                    <Form.Control type="text" placeholder="Tag 4" value={tag4} onChange={e => setTag4(e.target.value)}/>
                    <Form.Control type="text" placeholder="Tag 5" value={tag5} onChange={e => setTag5(e.target.value)}/>
                    <Form.Control type="text" placeholder="Tag 6" value={tag6} onChange={e => setTag6(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br></br>
            {tracks.map((track, index) => {
                return <Track key={index} tracksData={track} />
            })}
        </div>
    )
}

export default Profile