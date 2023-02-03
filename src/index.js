import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback="...is loading">
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
