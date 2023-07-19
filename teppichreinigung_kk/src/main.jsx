import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainpage from './Mainpage.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>
  </BrowserRouter>
);
