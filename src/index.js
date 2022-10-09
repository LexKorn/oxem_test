import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import InputStore from './store/InputStore';

import './style/style.sass';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    input: new InputStore()
  }}>
    <App />
  </Context.Provider>
);