import React from 'react';
import '../../css/bootstrap.min.css';
import './SmallSideBar.css';
import MaterialIcon from '@material/react-material-icon';


export default class SmallSideBar extends React.Component{
  render(){
    return(
        <div className="smallSideBar">
            <MaterialIcon icon="view_list" style={{ fontSize: '24px' }} />
        </div>
    );
  }
}