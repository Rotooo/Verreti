import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './app';
import './assets/styles/index.css';

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);