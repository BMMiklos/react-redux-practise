import React from 'react';
import { hot } from 'react-hot-loader';
import "./App.css";

import TodoList from './Todos/TodoList';
import Products from './Products/products';

const App = () => (
        <div className="App">
          <TodoList></TodoList>
          <Products></Products>
        </div>
);

export default hot(module)(App);
