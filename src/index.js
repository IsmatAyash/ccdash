import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
import { CcdashProvider } from './services/context';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router>
    <CcdashProvider>
      <App className='app' />
    </CcdashProvider>
  </Router>,
  document.getElementById('root')
);
