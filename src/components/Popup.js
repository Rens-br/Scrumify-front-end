import React from 'react';
import ReactDOM from "react-dom";
import './Popup.css';

const Popup = (props) => {
    return ReactDOM.createPortal(
        <div className='popupRoot'>
            <div className='popup'>
                <h1 className="popupTitle">{props.content}</h1>
                <div className="popupBtn" onClick={props.onDismiss}>
                    OK
                </div>
            </div>
        </div>,
        document.querySelector('#popup'))
};

export default Popup;