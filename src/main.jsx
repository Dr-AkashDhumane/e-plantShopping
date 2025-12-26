import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store.js';         // Import the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>            {/* Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
