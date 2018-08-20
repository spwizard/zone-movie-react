import * as actions from '../genres'
import { API_HOST, API_KEY_STRING } from './../../constants/apiPaths';
import * as types from "./../../constants/actionTypes";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const mockResult = [{id: 1, name: 'x'}]
describe('action creators', () => {

  it('should create LOAD_MOVIES_GENRES_SUCCESS when loading genres', () => {
    fetchMock.getOnce(`${API_HOST}/3/genre/movie/list${API_KEY_STRING}`, mockResult)

    const expectedActions = [
      { type: types.LOAD_MOVIE_GENRES },
      { type: types.LOAD_MOVIES_GENRES_SUCCESS, payload: mockResult  }
    ]
    const store = mockStore({ genres: {
      result: {}
    }})

    return store.dispatch(actions.loadMovieGenres())
      .then((data) => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })

  })

})