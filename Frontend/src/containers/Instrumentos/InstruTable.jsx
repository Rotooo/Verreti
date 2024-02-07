import React, {useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function InstruTable() {

  return (
    <>
      <h2>Lista de Instrumentos</h2>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={example.instrus}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
    </>
  )
}
