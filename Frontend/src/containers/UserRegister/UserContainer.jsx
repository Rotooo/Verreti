import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UserRegister from './UserRegister';
//import UserTable from './UserTable';

export default function UserContainer() {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <UserRegister />
                </Grid>
                {/*<Grid item xs={6}>
                    <UserTable />
                </Grid>*/}
            </Grid>
        </Box>
    </>
  )
}
