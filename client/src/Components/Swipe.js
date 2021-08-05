import SwipeCard from "./SwipeCard"
import {Carousel} from 'react-bootstrap'
import { useState } from 'react'
function Swipe({ swipeUsers }) {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    }
    // function handleNext() {
    //     console.log('Next!')
    // }

    function card(user) {
        // fetch(`/tracks/${user.id}`)
        // .then(res => res.json())
        // .then(tracks=> {
        //     return (
        //         <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
        //         alt="First slide"
        //         />
        //         <Carousel.Caption>
        //         <h3>{user.username}</h3>
        //         <h4>{user.user_type}</h4>
        //         <p>{user.bio}</p>
        //         <button className="btn btn-danger"> Dislike</button>
        //         <button className="btn btn-primary"> Like</button>
        //         </Carousel.Caption>

        //         </Carousel.Item>
        //     )
        // })
        return (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>{user.username}</h3>
                <h4>{user.user_type}</h4>
                <p>{user.bio}</p>
                <button className="btn btn-danger"> Dislike</button>
                <button className="btn btn-primary"> Like</button>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }
   
    return (
        <div className="container my-1">
        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
                {swipeUsers.map((user)=> {
                   return card(user)
               })}
        </Carousel>
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