import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context/Context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Previous demo versions used mock tokens that the local API cannot validate.
// Remove one so users are prompted to sign in with a real local account.
if (localStorage.getItem('Authorization')?.startsWith('mock.')) {
  localStorage.removeItem('Authorization');
  localStorage.removeItem('shopIt_user');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
