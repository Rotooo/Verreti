import React from 'react';
import Box from '@mui/material/Box';
import InstruForm from './InstruForm';
import InstruTable from './InstruTable';

export default function InstruContainer() {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <div className='menurow2'>
                <div className='item-cols'>
                    <InstruForm />
                </div>
                <div className='item-cols'>
                    <InstruTable />
                </div>
            </div>
        </Box>
    </>
  )
}
