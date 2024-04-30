import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'normalize.css';
import './reset.css';

import './index.css';

import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Gallery_react_diploma">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
