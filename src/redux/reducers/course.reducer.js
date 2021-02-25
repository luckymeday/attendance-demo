import * as types from "../constants/course.constants";
const initialState = {
  name: {},
  week: {},
  //   accessToken: localStorage.getItem("accessToken"),
  //   isAuthenticated: false,
  //   loading: false,
};

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_COURSE_REQUEST:
    case types.GET_COURSE_REQUEST:

    case types.CREATE_COURSE_REQUEST_FAILURE:
    case types.GET_COURSE_REQUEST_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_COURSE_REQUEST_SUCCESS:
    case types.GET_COURSE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default courseReducer;
