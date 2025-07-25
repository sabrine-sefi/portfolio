import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './layout/Layout.css';
import './i18n/i18n';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
