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
import styled from "styled-components";
import { useTable } from "react-table";
import { cohortData } from "../components/cohortData";

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

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

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

  const columns = React.useMemo(
    () => [
      {
        Header: "Current Cohort List",
        columns: [
          {
            Header: "Cohort Name",
            accessor: "cohort_name",
          },
          {
            Header: "Course Name",
            accessor: "course_name",
          },
          {
            Header: "Information",
            accessor: "information",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <div className="main-container">
        <h4>Add Cohort</h4>
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
      <div className="list-container">
        <h2>Current Cohort List</h2>
        <Styles>
          <Table columns={columns} data={cohortData} />
        </Styles>
      </div>
    </>
  );
};

export default AddCohort;
