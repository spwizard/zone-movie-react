import * as types from '../constants/actionTypes';

const initialState = {
  selectedGenres: [],
  selectedRating: 3
};

export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case types.USER_SELECT_BY_GENRE:
      return {
        ...state,
        selectedGenres: (() => {
          const index = state.selectedGenres.includes(action.payload);
          if (!index) {
            const selectedGenres = [...state.selectedGenres];
            selectedGenres.push(action.payload);
            return [...selectedGenres];
          } else {
            return state.selectedGenres.filter(id => id !== action.payload)
          }
        })()
      }

    case types.USER_SELECT_BY_RATING:
      return {
        ...state,
        selectedRating: action.payload
      }

    default:
      return {
        ...state
      }
  }
}