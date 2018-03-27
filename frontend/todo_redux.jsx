import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import App from './components/app';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';

import * as TodoAPI from './util/todo_api_util';

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');
  const store = configureStore();
  const root = document.getElementById('content');
  console.log(root);
  window.fetchTodos = TodoAPI.fetchTodos;
  window.store = store;
  window.fetchTodos = fetchTodos;
  window.receiveTodos = receiveTodos;

  ReactDOM.render(<Root store={ store }/>, root);
});
