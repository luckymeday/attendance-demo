import * as types from "../constants/course.constants";
import api from "../api";

const addCourse = (name, week) => async (dispatch) => {
  dispatch({ type: types.CREATE_COURSE_REQUEST, payload: null });
  try {
    const res = await api.post("/course", { name, week });
    dispatch({
      type: types.CREATE_COURSE_REQUEST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: types.CREATE_COURSE_REQUEST_FAILURE, payload: error });
  }
};

const getCourse = (name, week) => async (dispatch) => {
  dispatch({ type: types.GET_COURSE_REQUEST, payload: null });
  try {
    const res = await api.get("/course", { name, week });
    dispatch({
      type: types.GET_COURSE_REQUEST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_COURSE_REQUEST_FAILURE, payload: error });
  }
};

export const courseActions = {
  addCourse,
  getCourse,
};
