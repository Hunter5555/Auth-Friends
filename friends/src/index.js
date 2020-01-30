import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import history from './utilities/history';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>, document.getElementById('root')); 
