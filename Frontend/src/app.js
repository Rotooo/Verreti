import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InDexDB from './Context/IndexDB';
import HomePage from './pages/HomePage';

export default function app() {
  return (
    <InDexDB>
      <div className='app'>
        <BrowserRouter>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </InDexDB>
  )
}
