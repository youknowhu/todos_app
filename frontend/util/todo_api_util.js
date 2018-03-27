export const fetchTodos = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'GET',
    dataType: 'json',
  });
};

export const createTodo = (todoParams) => {
  return $.ajax({
    url: '/api/todos',
    method: 'POST',
    data: {todo: todoParams},
    dataType: 'json'
  });
};

export const deleteTodo = (todo) => {
  return $.ajax({
    url: `/api/todos/${todo.id}`,
    method: 'DELETE'
  });
};

window.fetchTodos = fetchTodos;
