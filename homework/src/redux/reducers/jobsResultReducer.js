import { DELETE_JOB } from "../actions";

const initialState = {
  searchedJobs: [],
};

const jobsResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_JOB:
      return {
        ...state,
        searchedJobs: [...state.searchedJobs.filter((job) => job.id)],
      };
    default:
      return state;
  }
};

export default jobsResultReducer;
