import React, {useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { InDexDB } from '../../Context/IndexDB';

export default function UserTable() {
  
  return (
    <>
      <h2>Lista de Usuarios</h2>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={example.users}
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
