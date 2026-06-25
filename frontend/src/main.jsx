import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';
import { store } from './store/store.js';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider>
          <App />
          <Toaster position="top-right" />
        </AppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
