import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "300px",
    backgroundColor:"yellow"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={9}>
          <Paper className={classes.paper}>This is my first Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my Second Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my Third Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my Fourth Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my first Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my Second Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my Third Website</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>This is my Fourth Website</Paper>
        </Grid>

      </Grid>
    </div>
  );
}
