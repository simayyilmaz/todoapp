import React from 'react';
import ReactDOM from 'react-dom';
import { TodoLayer } from './context/TodoContext';
import './index.css';
import App from './App';
import reducer, {initialState} from './context/reducer';


//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
   <App/>   
    </TodoLayer>
   
  </React.StrictMode>,
  document.getElementById('root')
);

