import React, { Component } from 'react';
import store from './store/store';
import { Provider } from 'mobx-react';
import TodoView from './views/TodoView';

class App extends Component {
  render() {
    return (
      <Provider className="App">
        <TodoView todolist={store} />
      </Provider>
    );
  }
}

export default App;
