import React from 'react';
import Box from '@mui/material/Box';
import UserRegister from './UserRegister';
import UserTable from './UserTable';
import '../../assets/styles/styles.css';

export default function UserContainer() {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <div className='menurow2'>
                <div className='item-cols'>
                    <UserRegister />
                </div>
                <div className='item-cols'>
                    <UserTable />
                </div>
            </div>
        </Box>
    </>
  )
}
