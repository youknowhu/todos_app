import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(todo).then(
      () => this.setState({title: '', body: ''}
    )
  );
  }

  render(){
    return (<form onSubmit={this.handleSubmit}>
      <label> Title
        <input
          className="input"
          onChange={this.update('title')}
          ref="title"
          value={this.state.title}
          required/>
      </label>

      <label> Body
        <textarea
          className="input"
          onChange={this.update('body')}
          ref="body"
          value={this.state.body}
          required>
      </textarea>
      </label>
      <button className="create-button">Create Todo!</button>
    </form>
    );

  }

}

export default TodoForm;
