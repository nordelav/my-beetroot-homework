import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// *Styles
import './styles/normalize.css';
import './styles/font.module.css';
import'./styles/index.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
