import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();
  function handlesubmit()
  {
      console.log("button submitted");
  }
  return (
    <div className={classes.root}>
      
      <ButtonGroup size="small" color="secondary" aria-label="outlined secondary button group">

        <Button onClick={handlesubmit}>Asset list</Button>
        <Button>Down Time</Button>
        <Button>Failure Events</Button>
        <Button>Spares Consumed</Button>
      </ButtonGroup>
      
    </div>
  );
}
