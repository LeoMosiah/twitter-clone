import { combineReducers, createStore } from 'redux';
import { tweetsReducer } from './redux/ducks/tweetsReducer';
import { userReducer } from './redux/ducks/userReducer';

export const initializeDomainLayer = () => {
const rootReducer = combineReducers({
  tweets: tweetsReducer,
  user: userReducer
});
  return { store : createStore(rootReducer)}
};