import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import Track from './Track'

function Profile({ user }) {
    const [title, setTitle] = useState("")
    const [trackURL, setTrackURL] = useState("")
    const [tracks, setTracks] = useState([])
    
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
            setTracks([...tracks, data])
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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {tracks.map((track, index) => {
                return <Track key={index} tracksData={track} />
            })}
        </div>
    )
}

export default Profile