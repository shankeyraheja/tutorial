
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BasicTextFields from "./inputfield"
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import "./layout.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [tasklist, setTasklist] = useState([])
  const [completed, setCompleted] = useState([])

  const handleInput = (event) => {
    if(event.key === "Enter"){
      let array = [...tasklist, event.target.value]
      setTasklist(array)
      event.target.value = ""
    }
  }



  const handleClick = (task) => {
    // Part1
    let array = [...completed, task]
    setCompleted(array)
    // Part2
    let copy = tasklist
    let index = copy.indexOf(task)
    copy.splice(index, 1)
    setTasklist(copy)
  }

  const clear = () => {
    setTasklist([])
  }

  const clearCompleted = () => {
    setCompleted([])
  }

  const deletetask = (task) => {
    let array = tasklist
    let index = array.indexOf(task)
    console.log(array)
    console.log(array.splice(index, 1))
    console.log(array)
    setTasklist([...array])
  }

  const moveUp = (task) => {
    let array = tasklist
    let index = array.indexOf(task, 1)
    array.unshift([task])
    setTasklist([...array])
  }

console.log("TASKLIST", tasklist)
  return (
    <div className={classes.root}>

      <BasicTextFields handleInput={handleInput}/>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>PENDING</h1>
          <Paper style={{height:"300px"}} className={classes.paper}>
          {
            tasklist.map(task => {
            return(
              <div className="task">
                <Tooltip title="Move Task to Completed">
                  <div className="item" onClick={(event) => handleClick(task)}>
                  <h2>{task}</h2>
                </div>
                </Tooltip>
                <Tooltip title="Edit">
                <button className="button2">Edit</button>
                </Tooltip>
                <Tooltip title="Move to top">
                <button className="button2" onClick={(event) => moveUp(task)}>Move Up</button>
                </Tooltip>
                <Tooltip title="Delete task">
                <DeleteIcon className="button" onClick={(event) => deletetask(task)}/>
                </Tooltip>
              </div>
            )
          })
        }
          </Paper>
            <button onClick={(event) => clear()}>CLEAR PENDING TASKS</button>
            </Grid>
            <Grid item xs={6}>
            <h1>COMPLETED</h1>
            <div className="column">
            <Paper style={{height:"300px"}} className={classes.paper}>
            {
              completed.map(task => {
                return (
                  <h2 className="task">{task}</h2>
                )
              })
            }
          </Paper>
          </div>
          <button onClick={(event) => clearCompleted()}>CLEAR COMPLETED TASKS</button>
        </Grid>
      </Grid>
    </div>
  );
}
