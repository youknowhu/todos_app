import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodos, receiveTodo, deleteTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  // removeTodo: (todo) => dispatch(removeTodo(todo)),

  fetchTodos: () => {
    const actionFn = fetchTodos();
    return dispatch(actionFn);
  },
  createTodo: (todoParams) => {
    const actionFn = createTodo(todoParams);
    return dispatch(actionFn);
  },

  deleteTodo: (todo) => {
    const actionFn = deleteTodo(todo);
    return dispatch(actionFn);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
