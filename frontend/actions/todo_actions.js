export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import { receiveErrors } from './error_actions';
import * as TodoAPI from '../util/todo_api_util';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS, todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO, todo
});


export const removeTodo = (todo) => ({
  type: REMOVE_TODO, todo
});

export function fetchTodos() {
  return function (dispatch) {
    TodoAPI.fetchTodos().then(todos => {
      const action = receiveTodos(todos);
      dispatch(action);
    });
  };
}
//
// export function createTodo(todoParams) {
//   return function (dispatch) {
//     TodoAPI.createTodo(todoParams).then(todo => {
//       console.log('before const action');
//       const action = receiveTodo(todo);
//        return dispatch(action);
//     });
//   };
// }

export const createTodo = (todoParams) => (dispatch) => (
  TodoAPI.createTodo(todoParams).then(
    todo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const deleteTodo = todoParams => dispatch => (
  TodoAPI.deleteTodo(todoParams).then(todo => dispatch(removeTodo(todo)))
);
