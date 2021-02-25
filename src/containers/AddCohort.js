import React, { useState } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

const AddCohort = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    courseName: "",
    cohortName: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log("course and cohort:", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("course and cohort:", formData);
  };

  return (
    <div className="main-container">
      <h2>Add Cohort</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormControl required className={classes.formControl}>
          <InputLabel id="demo-simple-select-required-label">
            Course Name
          </InputLabel>

          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            name="courseName"
            onChange={handleChange}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="fullstack">Fullstack Web Development</MenuItem>
            <MenuItem value="machine">Machine Learning</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <TextField
          required
          id="filled-required"
          label="Cohort Name"
          name="cohortName"
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

export default AddCohort;
