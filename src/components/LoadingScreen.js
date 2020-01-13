import React, {Component} from 'react';
import './LoadingScreen.css'
import {Spinner} from "react-bootstrap";

class LoadingScreen extends Component {
    render() {
        return (
            <div className='loadingScreen'>
                <Spinner className="spinner" animation="border" />
            </div>
        );
    }
}

export default LoadingScreen;