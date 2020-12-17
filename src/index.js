import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import Navigation from './navigation'
import App from './app'


ReactDOM.render(
  <React.StrictMode>
    <App>
    <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

