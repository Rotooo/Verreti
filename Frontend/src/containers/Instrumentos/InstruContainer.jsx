import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InstruForm from './InstruForm';
import InstruTable from './InstruTable';

export default function InstruContainer() {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <InstruForm />
                </Grid>
                <Grid item xs={6}>
                    <InstruTable />
                </Grid>
            </Grid>
        </Box>
    </>
  )
}
