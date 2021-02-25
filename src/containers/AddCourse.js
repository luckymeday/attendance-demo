import React, { useState } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useTable } from "react-table";
import { courseData } from "../components/courseData";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { courseActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
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

const AddCourse = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    week: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log("course and week:", formData

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, week } = formData;
    dispatch(courseActions.addCourse(name, week));
    console.log("course name:", formData);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Current Course List",
        columns: [
          {
            Header: "Course Name",
            accessor: "name",
          },
          {
            Header: "Week",
            accessor: "week",
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

  // const data = useSelector((state) => state.data);

  return (
    <>
      <div className="main-container">
        <h4>Add Course</h4>

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
            name="name"
            variant="outlined"
            onChange={handleChange}
          />
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Week</InputLabel>

            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              name="week"
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="12">12 weeks</MenuItem>
              <MenuItem value="16">16 weeks</MenuItem>
              <MenuItem value="20">20 weeks</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            Add
          </Button>
        </form>
      </div>
      <div className="list-container">
        <h2>Current Course List</h2>
        <Styles>
          <Table columns={columns} data={courseData} />
        </Styles>
      </div>
    </>
  );
};

export default AddCourse;
