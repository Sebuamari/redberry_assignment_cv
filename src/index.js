import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PopupProvider } from './context/PopUpContext';
import { CVProvider } from './context/CVContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CVProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </CVProvider>
  </React.StrictMode>
);

reportWebVitals();
