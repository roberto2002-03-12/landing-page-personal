import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './app/pages/LandingPage';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
