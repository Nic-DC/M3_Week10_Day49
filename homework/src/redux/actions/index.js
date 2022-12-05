export const ADD_TO_FAVORITES = `ADD_TO_FAVORITES`;
export const DELETE_FAVORITE = `DELETE_FAVORITE`;
export const DELETE_JOB = `DELETE_JOB`;

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
