import React, { useEffect } from "react";

export default function MatchModal(props) {
 useEffect(()=> {
     setTimeout(()=>{
         props.setDisplayModal(false)
     }, 2000)
 },[])
 return (
<div className="modal fade show " id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{display: "block"}}>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content" style={{background:"#e95420"}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle" style={{margin: 'auto'}}>Matched with user!!</h5>
            </div>
        </div>
        </div>
        </div>
  );
}
