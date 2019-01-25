import React, { Component, Fragment } from 'react';
import Views from './router/index';
import store from './store/store';
import { Provider } from 'mobx-react';
import TodoView from './views/TodoView';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider className="App">
          <TodoView todolist={store} />
        </Provider>
        <hr />
        <Views />
      </Fragment>
    );
  }
}

export default App;
