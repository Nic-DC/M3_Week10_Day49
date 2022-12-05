import { DELETE_JOB, GET_JOBS } from "../actions";

const initialState = {
  searchedJobs: [],
};

const jobsResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        searchedJobs: [...action.payload],
      };
    default:
      return state;
  }
};

export default jobsResultReducer;
