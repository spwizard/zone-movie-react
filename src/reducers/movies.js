import * as types from '../constants/actionTypes';

const initialState = {
  loading: false, 
  items: [], 
  dates: {}, 
  page: null, 
  total_results: null, 
  total_pages: null
}

export default function moviesReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOAD_MOVIES:
      return {
        ...state,
        loading: true
      }

    case types.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        dates: action.payload.dates,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
        items: action.payload.results
      }

    default:
      return {
        ...state
      }
  }


}