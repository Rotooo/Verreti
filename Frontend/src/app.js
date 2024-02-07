import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InDexDB from './Context/IndexDB';
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import InstruPage from './pages/InstruPage';
import ReportPage from './pages/ReportsSSIDPage';
import UsersPage from './pages/UserPage';
import TestPage from './pages/TextPage';

export default function app() {
  return (
    <InDexDB>
        <div className='app'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/companies' element={<ClientPage />} />
            <Route path='/instruments' element={<InstruPage />} />
            <Route path='/reportssid' element={<ReportPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/test' element={<TestPage />} />
          </Routes>
        </div>
    </InDexDB>
  )
}
