import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Board from './Board';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
