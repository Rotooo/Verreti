import React from 'react';
import Box from '@mui/material/Box';
import ClientForm from './ClientRegister';
import ClientTable from './ClientTable';
import ButtonBack from '../../components/BackButton';

export default function ClientContainer() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
            <ButtonBack />
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
