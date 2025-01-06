import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/airbnb-clone-react"> {/* Add basename for GitHub Pages */}
      <App />
    </Router>
  </React.StrictMode>
);

// Log web vitals (optional)
reportWebVitals();
