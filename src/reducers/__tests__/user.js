import reducer from "../user";
import * as types from "../../constants/actionTypes";

describe("user reducer", () => {
  it("should the create initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      selectedGenres: [],
      selectedRating: 3
    });
  });

  it("should handle USER_SELECT_BY_RATING", () => {
    const action = { type: types.USER_SELECT_BY_RATING, payload: 5 };
    const expectedState = {
      selectedGenres: [],
      selectedRating: 5
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle USER_SELECT_BY_GENRE if selected genre does not exist", () => {
    const action = { type: types.USER_SELECT_BY_GENRE, payload: 1 };
    const expectedState = {
      selectedGenres: [2, 1],
      selectedRating: 3
    };

    expect(
      reducer(
        {
          selectedGenres: [2],
          selectedRating: 3
        },
        action
      )
    ).toEqual(expectedState);
  });

  it("should handle USER_SELECT_BY_GENRE if selected genre already exists", () => {
    const action = { type: types.USER_SELECT_BY_GENRE, payload: 1 };
    const expectedState = {
      selectedGenres: [2],
      selectedRating: 3
    };

    expect(
      reducer(
        {
          selectedGenres: [2,1],
          selectedRating: 3
        },
        action
      )
    ).toEqual(expectedState);
  });
});
