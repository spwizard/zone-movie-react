import * as types from "./../constants/actionTypes";
import movieApi from "./../api/MoviesApi";

export function loadMoviesStart(){
  return { type: types.LOAD_MOVIES };
}

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, payload: movies };
}

export function filterByGenre(id) {
  return { type: types.FILTER_BY_GENRE, payload: id };
}

export function loadMovies() {
  return dispatch => {
    dispatch(loadMoviesStart());
      return movieApi
        .getAllMovies()
        .then(movies => {
          dispatch(loadMoviesSuccess(movies));
        })
        .catch(error => {
          throw error;
        });
  };
}

