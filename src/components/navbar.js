import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Element, Events} from 'react-scroll'
import "./navbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className="navbar">
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={300}>
            Home
          </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={300}>
            About
          </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link activeClass="active" to="news" spy={true} smooth={true} offset={-80} duration={300}>
            News
          </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={300}>
            Contact
          </Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
