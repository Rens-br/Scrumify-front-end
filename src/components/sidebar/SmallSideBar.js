import React from 'react';
import '../../css/bootstrap.min.css';
import './SmallSideBar.css';
import MaterialIcon from '@material/react-material-icon';
import Divider from './Divider';


export default class SmallSideBar extends React.Component{
  render(){
    return(
        <div className="smallSideBar">
            <div id="logo">
              <svg width="25" height="25" viewBox="0 0 40 40" className="headerImg" style={{marginLeft: '1px' }}>
                <path d="M19,8.94a13.29,13.29,0,0,1,7.58,19.7,12.79,12.79,0,0,1-21.27,1,13.18,13.18,0,0,1-2.38-5.43L6,23.62a9.75,9.75,0,0,0,19.34-1.33c.3-12.27-16-14.55-19.21-3.13L9.31,20,3.82,21.67,0,17.54l3.07.81A13,13,0,0,1,16.89,8.53a9,9,0,0,1,13.88-7,9.28,9.28,0,0,1-.44,15.67l.65,1.1L28.53,17l0-2.9.72,1.24a6.19,6.19,0,0,0,1.16-.85,7.13,7.13,0,0,0-1-11.29A6.9,6.9,0,0,0,19,8.94Z"></path>
              </svg>
              <Divider style={{ width: '50px' }} />
            </div>

            <div className="sbBtn">
              <MaterialIcon style={{ fontSize: '24px' }} className="sbIcon" icon="dashboard" />
              <Divider style={{ width: '50px' }} />
            </div>
            <div className="sbBtn">
              <MaterialIcon style={{ fontSize: '24px' }} className="sbIcon" icon="dashboard" />
              <Divider style={{ width: '50px' }} />
            </div>
            <div className="sbBtn">
              <MaterialIcon style={{ fontSize: '24px' }} className="sbIcon" icon="dashboard" />
              <Divider style={{ width: '50px' }} />
            </div>

            <div className="sbContainer"></div>

            <div id="toggleBtn" onClick={this.props.onClick}>
                <Divider style={{ width: '50px' }} />
                <MaterialIcon className="collapseIcon" icon="navigate_next" style={{ fontSize: '24px' }} />
            </div>
        </div>
    );
  }
}