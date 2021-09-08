import SwipeCard from "./SwipeCard"
import {Carousel} from 'react-bootstrap'
import { useState } from 'react'
import ReactPlayer from "react-player";
import MatchModal from "./MatchModal"

function Swipe({ tracks, swipeUsers, setSwipeUsers }) {
    const [index, setIndex] = useState(0);
    const [previewTrack, setPreviewTrack] = useState("")
    const [displayModal, setDisplayModal] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    }

    function card(user) {
        async function handleLike() {
            let obj = {
                liked_user_id: user.id
            }
            const res = await fetch('/like', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(obj)
            })
            if (res.ok) {
                const json = await res.json()
                console.log(json.response)
                if (json.response === "match") {
                    setDisplayModal(true)
                }
                let newArray = swipeUsers.filter(i => i.id !== user.id)
                setSwipeUsers(newArray)
                if (index >= newArray.length) {
                setIndex(0)
                }
            }
        }

        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
        
        console.log(windowWidth)
        
        return (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="First slide"
                style={{height: '550px', borderRadius: '30px'}}
                />
                <Carousel.Caption style={{display: 'block', height: windowWidth < 768 ? '90%' : '90%', padding: '0'}}>
                {(user.tracks.length != 0) ? (
                    <ReactPlayer
                    url = {`${user.tracks[0].song_url}`}
                    width = '100%'
                    height = {windowWidth < 768 ? '20%' : '30%'}
                    config = {{ 
                        soundcloud: {
                        options: {
                            sharing: true
                    }
                        }
                    }}
                    />
                ):null}
                <div className="container mt-5 d-flex justify-content-center" style={{color: 'coral'}}>
                    <div className="swipe-card p-3">
                        <div className="d-flex align-items-center">
                            <div className="image"> <img src={`${user.image_url}`} className="rounded" width={windowWidth < 768 ? '60' : "155"}/> </div>
                            <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0">{user.username}</h4> <span>{user.user_type}</span>
                                <div>
                                    {/* <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">38</span> </div> */}
                                    <div className="d-flex flex-column align-items-center"> <span className="number2">Age    {user.age}</span> </div>
                                </div>
                                <div className="button  mt-2 d-flex flex-row align-items-center">
                                    <button onClick={handleLike} className="btn orange-btn btn-sm ml-2" style={{width: '50px'}}>Like</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* {windowWidth < 768 ? null : ( */}
                <div className="container mt-5 d-flex justify-content-center" style={{color: 'coral'}}>
                <div className="swipe-card p-3">
                    <span>{user.bio}</span>
                </div>
                </div> 
                {/* )} */}
                </Carousel.Caption>
            </Carousel.Item>
        )
    }
   let error_msg = (<div className = "text-danger">No swipes left!</div>)
    return (
        <div className="container-md my-5" style={{width: windowWidth < 768 ? '95%' : '60%','backgroundRepeat': 'no-repeat'}}>
        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect} interval={null}>
        {displayModal ? <MatchModal setDisplayModal={setDisplayModal} /> : null}
                {swipeUsers.map((user)=> {
                   return card(user)
               })}
        </Carousel>
        {(swipeUsers.length == 0) ? error_msg : null}
        </div>
        
    )
}

export default Swipe