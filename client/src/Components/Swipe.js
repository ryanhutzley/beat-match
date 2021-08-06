import SwipeCard from "./SwipeCard"
import {Carousel} from 'react-bootstrap'
import { useState } from 'react'
import ReactPlayer from "react-player";
import MatchModal from "./MatchModal"

function Swipe({ tracks, swipeUsers, setSwipeUsers }) {
    const [index, setIndex] = useState(0);
    const [previewTrack, setPreviewTrack] = useState("")
    const [displayModal, setDisplayModal] = useState(false)
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    }
    // function handleNext() {
    //     console.log('Next!')
    // }

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
        // function handleDislike() {
        //     let newArray = swipeUsers.filter(i => i.id !== user.id)
        //     setSwipeUsers(newArray)
        // }
        
        
        return (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="First slide"
                style={{height: '550px'}}
                />
                <Carousel.Caption>
                {(user.tracks.length != 0) ? (
                    <ReactPlayer
                    url = {`${user.tracks[0].song_url}`}
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
                ):null}
                <div class="container mt-5 d-flex justify-content-center" style={{color: 'coral'}}>
                    <div class="swipe-card p-3">
                        <div class="d-flex align-items-center">
                            <div class="image"> <img src={`${user.image_url}`} class="rounded" width="155"/> </div>
                            <div class="ml-3 w-100">
                                <h4 class="mb-0 mt-0">{user.username}</h4> <span>{user.user_type}</span>
                                <div>
                                    {/* <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">38</span> </div> */}
                                    <div class="d-flex flex-column align-items-center"> <span class="number2">Age    {user.age}</span> </div>
                                </div>
                                <div className="button  mt-2 d-flex flex-row align-items-center">
                                    <button onClick={handleLike} class="btn orange-btn btn-sm  ml-2" >Like</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="container mt-5 d-flex justify-content-center" style={{color: 'coral'}}>
                <div class="swipe-card p-3">
                    <span>{user.bio}</span>
                </div>
                </div>
                
                </Carousel.Caption>
            </Carousel.Item>
        )
    }
   let error_msg = (<div className = "text-danger">No swipes left!</div>)
    return (
        <div className="container-md my-5" style={{width: '60%','background-repeat': 'no-repeat'}}>
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
    // <div className="container my-4">

    //     <div id="swipes" className="carousel slide" data-mdb-ride="carousel">
    //         <div className="carousel-inner">

    //         <div className="carousel-item active">
    //             <div className="col-md-6" style={{margin:"auto"}}>
    //                 <div className="card mb-4">
    //                     <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card cap"/>
    //                     <div className="card-body">
    //                         <h4 className="card-title">Default Card</h4>
    //                         <p className="card-title">Default card</p>
    //                         <p className="card-text">Default Card</p>
    //                         <button className="btn btn-primary">Like!</button>
    //                         <button className="btn btn-danger">No Like!</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //            {swipeUsers.map((user, index)=> {
    //                return <SwipeCard user={user} id = {index}/>
    //            })}
            
            
    //         <button className="carousel-control-prev" type="button" data-mdb-target="#swipes" data-mdb-slide="prev"></button>
    //         <button onClick={handleNext} className="carousel-control-next" type="button" data-mdb-target="#swipes" data-mdb-slide="next"></button>
    //         </div>
        
    //     </div>
    // </div>