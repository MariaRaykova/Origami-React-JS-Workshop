import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.module.css';
import Navigation from './navigation'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <App {...window.__STATE__}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

