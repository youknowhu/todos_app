import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo, deleteTodo, createTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        receiveTodo={ receiveTodo }
        createTodo={ createTodo }
        deleteTodo={ deleteTodo }/>
    )
  );
    return(
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm createTodo={ createTodo } />
      </div>
    );
  }
}

export default TodoList;
// module.exports = () => <h3>Todo List goes here!</h3>;

//
//   console.log(todo.map((todo) => todo));
//   return (
//   <div>
//     <ul>
//       { something }
//     </ul>
//   </div>
//   );
// )};
