import React from 'react';

class todoListItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e){
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }
  render(){
    return (
      <div>
        <li>
          {this.props.todo.title}
        </li>
        <button onClick={this.handleDelete}>Delete Todo</button>
      </div>
    );
  }
}


export default todoListItem;
