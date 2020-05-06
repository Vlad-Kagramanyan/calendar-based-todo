import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import Calendar from '../../components/Calendar';
import TodoList from '../../components/TodoList';
import rootReducer from '../../reducers';

import './style.scss';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Calendar} />
          <Route path="/item/:id" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
