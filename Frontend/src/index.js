import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './app';
import './assets/styles/index.css';

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <App />
  </Router>
);