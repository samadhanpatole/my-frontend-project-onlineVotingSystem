import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import reportWebVitals from './reportWebVitals';
import AppDemo from './ONLINEVOTING_SYSTEM/AppDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppDemo />
  </React.StrictMode>
);

reportWebVitals();