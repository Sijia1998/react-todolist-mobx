import React, { Component } from 'react';
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: this.props.todo.title, isReadOnly: true };
  }
  handleEnter = (e, index, value) => {
    if (e.keyCode === 13) {
      this.props.todolist.changeTodoTitle(index, value);
    }
  };
  handleDoubleClick = () => {
    console.log('123');
    this.setState({
      isReadOnly: false
    });
  };
  handleOnBlur = () => {
    this.setState({
      isReadOnly: true
    });
  };
  render() {
    const { todo, index, todolist } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.isfinished}
          onChange={e => {
            todo.isfinished = !todo.isfinished;
          }}
        />
        <input
          type="text"
          readOnly={this.state.isReadOnly}
          value={this.state.inputValue}
          className={this.state.isReadOnly ? 'inputStyle' : 'inputFocusStyle'}
          onChange={e => {
            this.setState({ inputValue: e.target.value });
            todolist.reviseTodo(index, e.target.value);
          }}
          onKeyUp={e => this.handleEnter(e, index, this.state.inputValue)}
          onDoubleClick={this.handleDoubleClick}
          onBlur={this.handleOnBlur}
        />
      </li>
    );
  }
}
