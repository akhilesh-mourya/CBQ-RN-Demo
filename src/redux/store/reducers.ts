import { data } from '../modules';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  data,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export default rootReducer;
