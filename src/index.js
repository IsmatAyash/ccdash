import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { CcdashProvider } from './services/context';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <CcdashProvider>
    <App className='app' />
  </CcdashProvider>,
  document.getElementById('root')
);
