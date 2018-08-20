import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store"; // Smart components

// Component to be tested
import RatingList from "../RatingList";

const mockStore = configureStore();
const initialState = {
    user : {
        selectedGenres: [],
        selectedRating: 3
    }
};
const store = mockStore(initialState);

describe("<RatingList />", () => {
    test('renders the component', () => {
        const wrapper = shallow(<RatingList store={store} />);
    const component = wrapper.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
});
