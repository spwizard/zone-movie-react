import * as actions from "../movie";
import { API_HOST, API_KEY_STRING } from "./../../constants/apiPaths";
import * as types from "./../../constants/actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const mockResult = { id: 1, title: "x" };
describe("action creators", () => {
  it("should create LOAD_MOVIES_SUCCESS when loading movies", () => {
    fetchMock.getOnce(
      `${API_HOST}/3/movie/now_playing${API_KEY_STRING}`,
      mockResult
    );

    const expectedActions = [
      { type: types.LOAD_MOVIES },
      { type: types.LOAD_MOVIES_SUCCESS, payload: mockResult }
    ];
    const store = mockStore({
      genres: {
        result: {}
      }
    });

    return store.dispatch(actions.loadMovies()).then(data => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should dispatch the correct action and payload filter by genre", () => {
    const expectedActions = [
        {
          payload: 1,
          type: types.FILTER_BY_GENRE,
        },
      ];

      store.dispatch(actions.filterByGenre(1));
      expect(store.getActions()).toEqual(expectedActions);
  });
});
