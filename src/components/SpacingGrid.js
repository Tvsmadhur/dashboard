import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import './Spacinggrid.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    padding: theme.spacing(2),
    
  },
  control: {
    padding: theme.spacing(3),
  },
}));

export default function SpacingGrid() {
  
  const classes = useStyles();

  

  return (
    <div className="lmn">
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3} >
          {[0].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div>ToTal
              DownTime</div>
              
              
              
              
                       
                       
                       <div>fracs</div>
                       <h2>james</h2>
              </Paper>
            </Grid>
          ))}
           {[1].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div >anamansn
              games</div>
              
              
              
              
                       
                       
                       <div>frbm Act</div>
                       <h2>Tommy</h2>
              </Paper>
            </Grid>
          ))}
           {[2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div >anamansn
              games</div>
              
              
              
              
                       
                       
                       <div>frbm Act</div>
                       <h2>Tommy</h2>
              </Paper>
            </Grid>
          ))}
          {[3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div >anamansn
              games</div>
              
              
              
              
                       
                       
                       <div>frbm Act</div>
                       <h2>Tommy</h2>
              </Paper>
            </Grid>
          ))}
           {[4].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div >anamansn
              games</div>
              
              
              
              
                       
                       
                       <div>frbm Act</div>
                       <h2>Tommy</h2>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
     </Grid>
     </div>
  );
}
