import React from 'react';
import '../css/bootstrap.min.css';
import './DropdownItem.css';
import MaterialIcon from '@material/react-material-icon';


export default class DropdownItem extends React.Component{
  render(){
    return(
        <div className="ddItemContainer">
            <p>{this.props.label}</p>
        </div>
    );
  }
}