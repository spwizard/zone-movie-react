import * as types from "./../constants/actionTypes";
import movieApi from "./../api/MoviesApi";

export function loadMovieGenrsStart() {
  return { type: types.LOAD_MOVIE_GENRES };
}

export function loadMovieGenresSuccess(genres) {
  return { type: types.LOAD_MOVIES_GENRES_SUCCESS, payload: genres };
}

export function loadMovieGenres() {
  return dispatch => {
    dispatch(loadMovieGenrsStart());
    return movieApi
      .getAllMovieGenres()
      .then(genres => {
        dispatch(loadMovieGenresSuccess(genres));
      })
      .catch(error => {
        throw error;
      });
  };
}
