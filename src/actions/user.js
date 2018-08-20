import * as types from "./../constants/actionTypes";

export function selectMoviesByGenre(number) {
  return { type: types.USER_SELECT_BY_GENRE, payload: number };
}

export function selectMoviesByRating(number) {
  return { type: types.USER_SELECT_BY_RATING, payload: number };
}

