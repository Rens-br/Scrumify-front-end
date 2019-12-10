import React from 'react';
import '../../css/bootstrap.min.css';
import './SmallSideBar.css';
import MaterialIcon from '@material/react-material-icon';
import Divider from './Divider';


export default class SmallSideBar extends React.Component{
  render(){
    return(
        <div className="smallSideBar" onClick={this.props.onClick}>
            <MaterialIcon className="collapseIcon" icon="dehaze" style={{ fontSize: '40px' }} />
            <Divider style={{ width: '50px' }} />
        </div>
    );
  }
}