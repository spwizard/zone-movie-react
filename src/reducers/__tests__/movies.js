import reducer from '../movies'
import * as types from '../../constants/actionTypes';
import * as apiResponse  from '../../api/mocks/movie-mocks';

describe('movie reducer', () => {
  it('should the create initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
            loading: false,
            dates: {},
            page: null,
            total_pages: null,
            total_results: null,
            items: []
        }
      )
  });

  it('should handle LOAD_MOVIES', () => {
    const startAction = {
        type: types.LOAD_MOVIES
      };
      expect(reducer({}, startAction)).toEqual({ loading: true});
  });

  it('should handle LOAD_MOVIES_SUCCESS', () => {
    const action = { type: types.LOAD_MOVIES_SUCCESS, payload: apiResponse.data };
    const expectedState = { 
        loading: false,
        dates: apiResponse.data.dates,
        page: apiResponse.data.page,
        total_pages: apiResponse.data.total_pages,
        total_results: apiResponse.data.total_results,
        items: apiResponse.data.results }

    expect(reducer(undefined, action)).toEqual(expectedState);
  });  


});

