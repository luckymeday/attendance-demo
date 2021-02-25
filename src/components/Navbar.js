import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar style={{ backgroundColor: "#FF0000" }}>
            <Typography
              variant="h2"
              className={classes.title}
              component={Link}
              to="/"
            >
              CoderSchool
            </Typography>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Admin Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/attendance">
                Attendance
              </MenuItem>
              <MenuItem component={Link} to="/addcourse">
                Add Course
              </MenuItem>
              <MenuItem component={Link} to="/addcohort">
                Add Cohort
              </MenuItem>
              <MenuItem component={Link} to="/addstudent">
                Add Student
              </MenuItem>
              <MenuItem component={Link} to="/callapi">
                Call Zoom Api
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
