import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './style.css';

export default class ProjectDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      on: false,
    }
  }

  openProjectDropDown = () => {
    if (this.state.on) {
      this.setState({
        on: false,
      });
      console.log(this.state.on);
    } else {
      this.setState({
        on: true,
      });
      console.log(this.state.on);
    }
  };
  
  render() {
    return (
      <div id="project">
        <ListItem button onClick={this.openProjectDropDown} key={"Project"}>
          <ListItemIcon> <ArrowDropDownIcon/> </ListItemIcon>
          <ListItemText style={{ color: '#FFFFFF' }} primary={"Project"} />
        </ListItem>

      
        {this.state.on && (
          <div className="SideBarStyle">
            <ListItem>
              <ListItemIcon> <ArrowDropDownIcon/> </ListItemIcon>
              <ListItemText primary={"Backlogs"} />
            </ListItem>
            <ListItem>
              <ListItemIcon> <ArrowDropDownIcon/> </ListItemIcon>
              <ListItemText primary={"Sprints"} />
            </ListItem>
          </div>
        )}
      </div>
      
    );
  }
}
