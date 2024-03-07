import React, {useEffect, useState} from 'react';
import {dajon} from '../../Context/DashboardMenu';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'codigo', headerName: 'Código', width: 150 },
  { field: 'alias', headerName: 'Alias', width: 110 },
  { field: 'marca', headerName: 'Marca', width: 150 },
  { field: 'modelo', headerName: 'Modelo', width: 110 },
  { field: 'tipo', headerName: 'Tipo', width: 110 },
  { field: 'alcance_max', headerName: 'Alcance Maximo', width: 110 },
  { field: 'division_min', headerName: 'División Minima', width: 110 },
];

export default function UserTable() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${dajon}/instrumento/instruments`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if(!post) return null;

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={post}
        getRowId={(post) => post._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  )
}
