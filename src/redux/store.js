import { createStore, combineReducers } from 'redux';
import reportReducer from './reducers';

const rootReducer = combineReducers({
  report: reportReducer,
});

const store = createStore(rootReducer);

export default store;
