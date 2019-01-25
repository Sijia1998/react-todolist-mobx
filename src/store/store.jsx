import { observable, action, computed } from 'mobx';
import React from 'react';

class Todo {
  id = Math.random();
  @observable title;
  @observable isfinished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable todos = [];
  @observable searchList = [];

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.isfinished).length;
  }
  @computed get howToShow() {
    if (this.unfinishedTodoCount === 0) {
      return <p>全部任务都已完成</p>;
    } else {
      return <p>当前未完成的任务有{this.unfinishedTodoCount}</p>;
    }
  }

  @action addTodo(title) {
    if (!title) return;
    this.todos.push(new Todo(title));
  }
  @action changeTodo(index) {
    this.todos[index].isfinished = !this.todos[index].isfinished;
  }
  @action changeTodoTitle(index, value) {
    console.log('yes');
    this.todos[index].title = value;
  }
  @action deleteTodo(index) {
    this.todos.splice(index, 1);
  }
  @action searchTodo(inputValue) {
    this.searchList = this.todos.filter(
      todo => todo.title.indexOf(inputValue) > -1
    );
  }
  @action reviseTodo(index, value) {
    this.todos[index].title = value;
  }
}

const store = new TodoList();
store.todos.push(new Todo('Learn mobx'));
store.todos[0].isfinished = true;

export default store;
