import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ProjectDropdown from './ProjectDropdown';

import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  dashboardIcon:{
    fontSize: 'large',
  },
  listItemText:{
    fontSize:'1.6em',
    color: '#FFFFFF',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#EB5757'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />

        <ListItem button key={"Dashboard"}>
            <ListItemIcon classes={{primary:classes.dashboardIcon}}> <DashboardIcon style={{ color: '#FFFFFF' }}/> </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary={"Dashboard"} />
        </ListItem>
        <Divider/>

        <ProjectDropdown />
        <Divider />
      </Drawer>
    </div>
  );
}