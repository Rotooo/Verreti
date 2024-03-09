import React from 'react';
import Box from '@mui/material/Box';
import ClientForm from './ClientRegister';
import ClientTable from './ClientTable';

export default function ClientContainer() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
            <div className='menurow2'>
                <div className='item-cols'>
                  <ClientForm />
                </div>
                <div className='item-cols'>
                  <ClientTable />
                </div>
            </div>
        </Box>
    </>
  )
}
