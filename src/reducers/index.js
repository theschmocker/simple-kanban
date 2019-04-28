import { combineReducers } from 'redux';

import cardReducer from './cards';
import columnReducer from './columns';

export default combineReducers({
  columns: columnReducer,
  cards: cardReducer
});