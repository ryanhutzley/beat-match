import React from 'react'
import { Carousel } from 'react-bootstrap'
export default function SwipeCard({user}) {
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
                </Carousel.Caption>
            </Carousel.Item>
    )
}

        // <div className="carousel-item" id={id}>
        //     <div className="col-md-6" style={{margin:"auto"}}>
        //         <div className="card mb-4">
        //             <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card cap"/>
        //             <div className="card-body">
        //                 <h4 className="card-title">{user.username}</h4>
        //                 <p className="card-title">{user.user_type}</p>
        //                 <p className="card-text">{user.bio}</p>
        //                 <button className="btn btn-primary">Like!</button>
        //                 <button className="btn btn-danger">No Like!</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>