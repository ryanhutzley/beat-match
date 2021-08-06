import Track from './Track'
import { Form, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { useState } from 'react'

function Feed({ tracks, tags }) {
    const [tagQuery, setTagQuery] = useState("Tag")
    const [userQuery, setUserQuery] = useState("")
    const [displayedTracks, setDisplayedTracks] = useState(tracks)

    let tagIds = tags.map(tag => tag.id)

    function handleSearch(e) {
        e.preventDefault()
        let searchByTag = []
        let filteredTracks  = tracks.forEach(track => {
            track.tags.forEach(tag => {
                if (tag.genre === tagQuery || tagQuery === "Tag") {
                    if (!searchByTag.includes(track)) {
                        searchByTag.push(track)
                    }    
                }
            })
        })
        let searchByUser = searchByTag.filter(track => (track.user.username === userQuery) || userQuery === "")
        setDisplayedTracks(searchByUser)
    }
    
    return (
        <div>
            <br></br>
            <h1>BeatMatch Feed</h1>
            <h4>Hear the latest tracks from fellow BeatMatch users!</h4>
            <br></br>
            <h5>Search by...</h5>
            <Form onSubmit={handleSearch}>
                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Form.Group className="mb-3" type = "text">
                    <DropdownButton id="dropdown-basic-button" title={tagQuery} style={{width: "100px", justifyContent: "space-between", margin: "10px"}}>
                        {tags.map((tag, index) => {
                            return <Dropdown.Item id={tag.genre} onClick={(e) => setTagQuery(e.target.id)} key={index}>{tag.genre}</Dropdown.Item>
                        })}
                    </DropdownButton>
                </Form.Group>
                <Form.Group style={{marginTop: '10px'}}>
                    <Form.Control type="text" placeholder="Username" value={userQuery} onChange={e => setUserQuery(e.target.value)} />
                </Form.Group>
                {/* <DropdownButton id="dropdown-basic-button" title="Users" style={{width: "100px", justifyContent: "space-between", margin: "10px"}}>
                    {tracks.map((track, index) => {
                        return <Dropdown.Item id={track.user_id} onClick={(e) => console.log(e.target.id)} key={index}>{track.user.username}</Dropdown.Item>
                    })}
                </DropdownButton> */}
                </div>
                <button className="btn orange-btn btn-sm  ml-2" style={{width: "100px", justifyContent: "space-between", margin: "20px"}}  type="submit">Search</button>
            </Form>
            <br></br>
            <br></br>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
                {displayedTracks.map((track, index) => {
                    return <Track trackData={track} key={index} />
                })}
            </div>
        </div>
    )
}

export default Feed