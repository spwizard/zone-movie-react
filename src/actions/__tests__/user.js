import * as actions from "../user";
import * as types from "./../../constants/actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("action creators", () => {

  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  
  it("should the correct action and payload for select movies by genre", () => {
    const expectedActions = [
      {
        payload: 1,
        type: types.USER_SELECT_BY_GENRE
      }
    ];

    store.dispatch(actions.selectMoviesByGenre(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should the correct action and payload for select movies by rating", () => {
    const expectedActions = [
      {
        payload: 1,
        type: types.USER_SELECT_BY_RATING
      }
    ];

    store.dispatch(actions.selectMoviesByRating(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
