import React from 'react';
import ReactDOM from "react-dom";
import './Popup.css';

const Popup = props => {
    return ReactDOM.createPortal(
        <div className='popupRoot'>
            <div className='popup'>
                <h1>Test</h1>
            </div>
        </div>,
        document.querySelector('#popup'))
};

export default Popup;