import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import Track from './Track'

function Profile({ user, tags, tracks, setTracks, handleDeleteTrack, handleUserUpdate, handleUserDelete, errors }) {
    // track form states
    const [title, setTitle] = useState("")
    const [trackURL, setTrackURL] = useState("")
    // const [userTracks, setUserTracks] = useState([])
    const [tag1, setTag1] = useState("")
    const [tag2, setTag2] = useState("")
    const [tag3, setTag3] = useState("")
    const [tag4, setTag4] = useState("")
    const [tag5, setTag5] = useState("")
    const [tag6, setTag6] = useState("")
    // const [errors, setErrors] = useState([])
    const [formSelect, setFormSelect] = useState(true)

    // account update form states
    const [username, setUsername] = useState(user.username)
    const [imageURL, setImageURL] = useState(user.image_url)
    const [age, setAge] = useState(user.age)
    const [bio, setBio] = useState(user.bio)
    const [userType, setUserType] = useState(user.user_type)

    console.log(tracks)
    
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
            addTags(data)
            setTitle("")
            setTrackURL("")
        }
    }

    function addTags(data) {
        let inputTags = [tag1, tag2, tag3, tag4, tag5, tag6]
        let selectedTags = inputTags.filter(tag => tag !== "")
        let existingTags = tags.map(tag => tag.genre)
        selectedTags.forEach(tag => {
            if (existingTags.includes(tag)) {
                let tagObj = tags.find(t => t.genre === tag)
                addTrackTags(tagObj, data)
            } else {
                fetch("/tags", {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({
                        genre: tag
                    })
                })
                .then(res => res.json())
                .then(newTag => {
                    addTrackTags(newTag, data)
                })
            }
        })
    }

    function addTrackTags(newTag, data) {
        fetch("/track_tags", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                track_id: data.id,
                tag_id: newTag.id
            })
        })
        .then(res => res.json())
        .then(() => getTrack(data.id))
    }

    function getTrack(id) {
        fetch(`/tracks/${id}`)
        .then(res => res.json())
        .then(song => {
            setTracks([...tracks, song])
            setTag1("")
            setTag2("")
            setTag3("")
            setTag4("")
            setTag5("")
            setTag6("")
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let updatedInfo = {
            username,
            image_url: imageURL,
            user_type: userType,
            age: parseInt(age),
            bio
        }
        handleUserUpdate(updatedInfo)
    }

    let filteredTracks = tracks.filter(track => track.user_id === user.id)

    // console.log(filteredTracks)

    return (
        <>
            {formSelect ?
                (
                    <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">BeatMatch Account Update</h3>
                                <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
        
                                    <div className="form-outline">
                                        <input required type="text" id="username" className="form-control form-control-lg" value={username} onChange={e => setUsername(e.target.value)}/>
                                        <label className="form-label" htmlFor="firstName">Username</label>
                                    </div>
        
                                    </div>
                                    <div className="col-md-6 mb-4">
        
                                    <div className="form-outline">
                                        <input type="text" id="imageURL" className="form-control form-control-lg" value={imageURL} onChange={e => setImageURL(e.target.value)}/>
                                        <label className="form-label" htmlFor="firstName">Profile Pic URL</label>
                                    </div>
        
                                    </div>
                                    <div className="col-md-6 mb-4">
        
                                    <div className="form-outline">
                                        <input required type="number" min="13" id="age" className="form-control form-control-lg" value={age} onChange={e => setAge(e.target.value)}/>
                                        <label className="form-label" htmlFor="age">Age</label>
                                    </div>
        
                                    </div>
                                </div>
        
                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">
        
                                    <div className="form-outline">
                                        <textarea required type="bio" id="bio" className="form-control form-control-lg" value={bio} onChange={e => setBio(e.target.value)}/>
                                        <label className="form-label" htmlFor="bio">Bio</label>
                                    </div>
        
                                    </div>
                                    
                                </div>
                                    <div className="col-md-6 mb-4">
        
                                    <h6 className="mb-2 pb-1">User Role: </h6>
        
                                    <div className="form-check form-check-inline">
                                        <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        value="Producer"
                                        checked={userType === "Producer"}
                                        onChange={e => setUserType(e.target.value)}
                                        />
                                        <label className="form-check-label" >Producer</label>
                                    </div>
        
                                    <div className="form-check form-check-inline">
                                        <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        value="Rapper"
                                        checked={userType === "Rapper"}
                                        onChange={e => setUserType(e.target.value)}
                                        />
                                        <label className="form-check-label" >Rapper</label>
                                    </div>
        
                                    </div>
        
                                <div className="mt-4 pt-2">
                                    <input className="btn btn-primary btn-lg" type="submit" value="Save Changes" /> {" "}
                                    <input className="btn btn-primary btn-lg" type="button" value="Add/Show Your Tracks!" onClick={() => setFormSelect(!formSelect)}/> {" "}
                                    <input className="btn btn-danger btn-lg" type="button" value="Delete Profile" onClick={handleUserDelete} /> 
                                </div>
        
                                </form>
                            </div>
                            {errors !== [] ? 
                            (<div>
                                {errors.map((error, index)=> (<p style={{color: 'red'}} key={index}>{error}</p>))}
                            </div>)
                            : null}
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                ) : (
                    <>
                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
                        <br></br>
                        <Form onSubmit={addTrack}>
                            <Form.Group className="mb-3" type = "text">
                                <Form.Label>Track Title</Form.Label>
                                <Form.Control required type="text" placeholder="Name of your track" value={title} onChange={e => setTitle(e.target.value)} />
                                <Form.Text className="text-muted">
                                Unleash your creativity
                                </Form.Text>
                            </Form.Group>
        
                            <Form.Group className="mb-3" type = "text">
                                <Form.Label>Track Link</Form.Label>
                                <Form.Control required type="text" placeholder="Link to your track" value={trackURL} onChange={e => setTrackURL(e.target.value)}/>
                            </Form.Group>
                        
                            <Form.Group className="mb-3" type = "text">
                                <Form.Label>Track Tags</Form.Label>
                                <br></br>
                                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <Form.Control style={{width: "100px", justifyContent: "space-between", margin: "10px"}} required type="text" placeholder="Tag 1" value={tag1} onChange={e => setTag1(e.target.value)}/>
                                    <Form.Control style={{width: "100px", justifyContent: "space-between", margin: "10px"}} type="text" placeholder="Tag 2" value={tag2} onChange={e => setTag2(e.target.value)}/>
                                    <Form.Control style={{width: "100px", justifyContent: "space-between", margin: "10px"}} type="text" placeholder="Tag 3" value={tag3} onChange={e => setTag3(e.target.value)}/>
                                    <Form.Control style={{width: "100px", justifyContent: "space-between", margin: "10px"}} type="text" placeholder="Tag 4" value={tag4} onChange={e => setTag4(e.target.value)}/>
                                    <Form.Control style={{width: "100px", justifyContent: "space-between", margin: "10px"}} type="text" placeholder="Tag 5" value={tag5} onChange={e => setTag5(e.target.value)}/>
                                    <Form.Control style={{width: "100px", justifyContent: "space-between", margin: "10px"}} type="text" placeholder="Tag 6" value={tag6} onChange={e => setTag6(e.target.value)}/>
                                </div>
                            </Form.Group>
                            <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Button variant="primary" type="submit" style={{margin: "10px"}}>
                                    Submit
                                </Button>
                                {" "}
                                <Button variant="primary" type="button" style={{margin: "10px"}} onClick={() => setFormSelect(!formSelect)}>
                                    Back to Account Update
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}> 
                        <br></br>
                        <br></br>
                        <h2>Track List</h2>
                        {filteredTracks.map((track, index) => {
                            return (
                                <div style={{width: "100%", margin: "auto"}}>
                                    <Track key={index} profileTrack={track} />
                                    <Button id={track.id} onClick={handleDeleteTrack} variant='danger' size='sm'>Delete Track</Button>
                                    <br></br>
                                </div>
                            )
                        })}
                    </div>
                </>
                )
            }
        </>
    )
}

export default Profile