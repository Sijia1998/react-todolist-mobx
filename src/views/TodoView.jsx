import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import TodoItem from './TodoItem.jsx';

@inject('todolist')
@observer
class TodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      searchInfo: ''
    };
  }

  changeTitle = e => {
    let title = e.target.value;
    this.setState({
      title
    });
  };

  submit = () => {
    this.props.todolist.addTodo(this.state.title);
    this.setState({
      title: ''
    });
  };

  infoChange = e => {
    let info = e.target.value;
  };

  render() {
    const { todolist } = this.props;
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.changeTitle}
        />
        <button onClick={this.submit}>submit</button>
        <ul>
          {todolist.todos.map((todo, index) => (
            <Fragment key={todo.id}>
              <TodoItem todo={todo} key={todo.id} />
              <button onClick={() => todolist.deleteTodo(index)}>删除</button>
              <button onClick={() => todolist.changeTodo(index)}>
                {todo.isfinished ? '已完成' : '未完成'}
              </button>
              <button>修改</button>
            </Fragment>
          ))}
        </ul>
        <p>{todolist.howToShow}</p>
        <input
          type="text"
          onChange={this.infoChange}
          value={this.state.searchInfo}
        />
        <button onClick={todolist.searchTodo}>查找</button>
      </div>
    );
  }
}

export default TodoView;
