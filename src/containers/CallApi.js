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

const CallApi = () => {
  const classes = useStyles();

  const [meetingId, setMeetingId] = useState("");

  const handleChange = (e) => setMeetingId({ meetingId: e.target.value });
  // console.log("typing meeting Id:", meetingId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("meeting ID:", meetingId);
  };

  return (
    <div className="main-container">
      <h2>Call Zoom Api</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="filled-required"
          label="Meeting ID"
          variant="outlined"
          onChange={handleChange}
        />

        <Button variant="contained" color="secondary" type="submit">
          Generate
        </Button>
      </form>
    </div>
  );
};

export default CallApi;
