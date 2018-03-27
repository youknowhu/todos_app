import { combineReducers } from 'redux';
//import other reducers here:
import todosReducer from './todos_reducer';
import errorReducer from './error_reducer';
const rootReducer = combineReducers({
  todos: todosReducer,
  errors: errorReducer
});

export default rootReducer;
