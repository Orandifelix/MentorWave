import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from './context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <Router>
    <App />
  </Router>
  </ContextProvider>
)
