//
export const allTodos = ({ todos }) => {
  let keys = Object.keys(todos);
  let answer = [];
  keys.forEach((key) => {
    answer.push(todos[key]);
  });
  return answer;
};

// export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);
