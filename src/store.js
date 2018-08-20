import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Be sure to ONLY add this middleware in development!
const middleware =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default(), thunk]
    : [thunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


