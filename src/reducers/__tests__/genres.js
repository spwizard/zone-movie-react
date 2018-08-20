
import reducer from '../genres'
import * as types from '../../constants/actionTypes';
import * as apiResponse  from '../../api/mocks/genres-mocks';

describe('genre reducer', () => {
  it('should the create initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
          loading: false,
          items: []
        }
      )
  });

  it('should handle LOAD_MOVIE_GENRES', () => {
    const startAction = {
        type: types.LOAD_MOVIE_GENRES
      };
      expect(reducer({}, startAction)).toEqual({ loading: true});
  });

  it('should handle LOAD_MOVIES_GENRES_SUCCESS', () => {
    const action = { type: types.LOAD_MOVIES_GENRES_SUCCESS, payload: apiResponse.data };
    const expectedState = { loading: false, items: apiResponse.data.genres }

    expect(reducer(undefined, action)).toEqual(expectedState);
  }); 


});

