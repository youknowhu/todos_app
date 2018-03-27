import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  // 1: {
  //   id: 1,
  //   title: 'wash car',
  //   body: 'with soap',
  //   done: false
  // },
  // 2: {
  //   id: 2,
  //   title: 'wash dog',
  //   body: 'with shampoo',
  //   done: true
  // },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      nextState = [];
      state.forEach(todo => {
        if (todo.id !== action.todo.id) nextState.push(todo);
      });
      return nextState;
    default:
      return state;
  }
};


export default todosReducer;
