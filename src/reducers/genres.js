import * as types from '../constants/actionTypes';

const initialState = { 
  loading: false, 
  items: [] 
} 

export default function genresReducer(state = initialState, action) {

  switch(action.type) {

    case types.LOAD_MOVIE_GENRES:
      return {
        ...state,
        loading: true
      }

    case types.LOAD_MOVIES_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.genres
      }

    default: 
      return {
        ...state
      }
  }
}