import React from 'react';

const CloseHandler=()=>{
    window.location.reload();
}
const Popup = (props) => {
    return (
        
             <div className="overlay">
      <div className="popup">
        <h1>Your Add</h1>
        <div>
        <p>Category:<span>{props.category}</span>
        </p>
        <p>Heading:<span>{props.heading}</span>
        </p>
        <p> Description:<span>{props.description}</span>
        </p>
        <p> Price:<span>{props.price}</span>
        </p>
        <p> Location:<span>{props.location}</span>
        </p>
        <button onClick={CloseHandler}>Back to Publish</button>
        </div>
      </div>
      </div>
        
    );
};

export default Popup;