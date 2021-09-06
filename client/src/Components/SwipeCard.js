import React from 'react'
import { Carousel } from 'react-bootstrap'
function SwipeCard(props, {user}) {
    return (
        <Carousel.Item {...props}>
            <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            {/* <h3>{props.user.username}</h3>
            <h4>{props.user.user_type}</h4>
            <p>{props.user.bio}</p> */}
            </Carousel.Caption>
        </Carousel.Item>
)}

export default SwipeCard