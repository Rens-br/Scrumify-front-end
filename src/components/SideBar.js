import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
        

        {/* TODO: Change text size and color to abt 20px and white*/}
        <ListItem button key={"Dashboard"}>
            <ListItemIcon> <DashboardIcon/> </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
        </ListItem>
        <Divider/>

        {/* List expects array of items to map through like displayed below*/}
        {/* <List>
            {['Dashboard'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon> <DashboardIcon/> </ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
        </List> */}

      </Drawer>
    </div>
  );
}
          
          