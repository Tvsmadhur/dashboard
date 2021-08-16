import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import BasicButtonGroup from './Button.js'
import './ListStyle.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
       
        <div className="xyz">
        <BasicButtonGroup/>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          
          <ListItemText primary="Pvc Machine" className ="apple" />
        </ListItem>
        <ListItem button>
          
          <ListItemText primary="Double Disc Winder" className ="banana" />
        </ListItem>
      </List>
      
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Pc Series Strong Crusher" className ="banana"  />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Double Disc Winder" />
        </ListItemLink>
      </List>
      </div>
    </div>
  );
}
