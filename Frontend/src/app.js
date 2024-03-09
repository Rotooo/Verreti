import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InDexDB from './Context/IndexDB';
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import InstruPage from './pages/InstruPage';
import ReportPage from './pages/ReportsSSIDPage';
import UsersPage from './pages/UserPage';
import ReportPageT from './pages/ReportPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

export default function app() {
  return (
    <InDexDB>
        <div className='app'>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/companies' element={<ClientPage />} />
            <Route path='/instruments' element={<InstruPage />} />
            <Route path='/reportssid' element={<ReportPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/reportT' element={<ReportPageT />} />
            <Route path='/test' element={<TestPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
    </InDexDB>
  )
}
