import React from 'react';
import '../../css/bootstrap.min.css';
import './SbIcon.css';
import MaterialIcon from '@material/react-material-icon';
import Divider from './Divider';


export default class SbIcon extends React.Component{
  render(){
    return(
        <div className="sbBtn">
            <MaterialIcon style={{ fontSize: '24px' }} className="sbIcon" icon={this.props.icon} />
            <Divider style={{ width: '50px' }} />
        </div>
    );
  }
}