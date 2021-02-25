import React, { useState } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

const AddCourse = () => {
  const classes = useStyles();

  const [courseName, setCourseName] = useState("");

  const handleChange = (e) => setCourseName({ courseName: e.target.value });
  // console.log("typing course name:", courseName);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const courseName = formData;
    console.log("course name:", courseName);
  };

  return (
    <div className="main-container">
      <h2>Add Course</h2>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="filled-required"
          label="Course Name"
          variant="outlined"
          onChange={handleChange}
        />

        <Button variant="contained" color="secondary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddCourse;
