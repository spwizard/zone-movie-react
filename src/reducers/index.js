import {combineReducers} from 'redux';
import movies from './movies';
import genres from './genres';
import user from './user';

const rootReducer = combineReducers({
  movies,
  genres,
  user
})


export default rootReducer;