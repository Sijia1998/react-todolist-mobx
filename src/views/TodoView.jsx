import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import TodoItem from './TodoItem.jsx';
import './style.css';

@inject('todolist')
@observer
class TodoView extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', inputText: '' };
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
    console.log('test');
  };

  handleEnterAdd = e => {
    if (e.keyCode === 13) {
      this.submit();
    }
  };

  handleSearchClick = () => {
    this.props.todolist.searchTodo(this.state.inputText);
    console.log(this.state.inputText);
    this.setState({ inputText: '' });
  };

  searchEnterList = e => {
    if (e.keyCode === 13) {
      this.handleSearchClick();
    }
  };

  infoChange = e => {
    let inputText = e.target.value;
    this.setState({ inputText });
  };
  
  render() {
    const { todolist } = this.props;
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.changeTitle}
          onKeyUp={this.handleEnterAdd}
        />
        <button onClick={this.submit}>submit</button>
        <ul>
          {todolist.todos.map((todo, index) => (
            <Fragment key={todo.id}>
              <TodoItem
                todo={todo}
                index={index}
                key={todo.id}
                todolist={this.props.todolist}
              />
              <button onClick={() => todolist.deleteTodo(index)}>删除</button>
              <button onClick={() => todolist.changeTodo(index)}>
                {todo.isfinished ? '已完成' : '未完成'}
              </button>
            </Fragment>
          ))}
        </ul>
        <div>{todolist.howToShow}</div>
        <input
          type="text"
          onChange={this.infoChange}
          value={this.state.inputText}
          onKeyUp={this.searchEnterList}
          
        />
        <button onClick={this.handleSearchClick}>查找</button>
        <div>
          {todolist.searchList.map(item => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default TodoView;
