import React from "react";
import { Switch, Route } from "react-router-dom";
import Attendance from "../containers/Attendance";
import Navbar from "../components/Navbar";
import Main from "../containers/Main";
import AddCourse from "../containers/AddCourse";
import AddCohort from "../containers/AddCohort";
import AddStudent from "../containers/AddStudent";
import CallApi from "../containers/CallApi";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/attendance" exact component={Attendance} />
        <Route path="/addcourse" exact component={AddCourse} />
        <Route path="/addcohort" exact component={AddCohort} />
        <Route path="/addstudent" exact component={AddStudent} />
        <Route path="/callapi" exact component={CallApi} />
      </Switch>
    </>
  );
};

export default Routes;
