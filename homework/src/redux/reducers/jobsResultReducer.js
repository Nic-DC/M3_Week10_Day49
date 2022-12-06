import { FETCH_JOBS, FETCH_JOBS_LOADING, TRIGGER_FETCH } from "../actions";

const initialState = {
  searchedJobs: [],
  isLoading: true,
  triggeredFetch: false,
};

const jobsResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        searchedJobs: [...action.payload],
      };

    case FETCH_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        // we could write it like
        // isLoading: !state.isLoading
        // in this case, we would NOT need a payload
      };

    case TRIGGER_FETCH:
      return {
        ...state,
        triggeredFetch: !state.triggeredFetch,
      };
    default:
      return state;
  }
};

export default jobsResultReducer;
