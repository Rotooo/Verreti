import React from 'react';
import InDexDB from './Context/IndexDB';
import UserPage from './pages/HomePage';

export default function app() {
  return (
    <InDexDB>
      <div className='app'>
        <UserPage />
      </div>
    </InDexDB>
  )
}
