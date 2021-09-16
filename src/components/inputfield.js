import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({handleInput}) {
  const classes = useStyles();



  return (
      <div>
      <TextField id="outlined-basic" label="Create New Task" variant="outlined" onKeyPress={(event) => handleInput(event)}/>
      </div>
  );
}
