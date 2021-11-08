import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Restaurant from './components/Restaurant';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 
        // Route to index page
        */}
        <Route path="/" element={<App />} />
        {/* 
        // Route to individual restaurant page
        */}
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
