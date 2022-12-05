export const ADD_TO_FAVORITES = `ADD_TO_FAVORITES`;
export const DELETE_FAVORITE = `DELETE_FAVORITE`;
export const DELETE_JOB = `DELETE_JOB`;
export const GET_JOBS = `GET_JOBS`;

export const addToFavoritesAction = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const deleteFavoriteAction = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

export const deleteJobAction = (id) => {
  return {
    type: DELETE_JOB,
    payload: id,
  };
};

export const getQuery = () => {};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs...");
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const fetchedJobs = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
