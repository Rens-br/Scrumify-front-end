import React from 'react';
import '../../css/bootstrap.min.css';
import './SbIcon.css';
import MaterialIcon from '@material/react-material-icon';


export default class SbIcon extends React.Component{
  render(){
    return(
        <div className="sbBtn">
            <MaterialIcon style={{ fontSize: '24px' }} className="sbIcon" icon={this.props.icon} />
            
        </div>
    );
  }
}