import React, {useEffect, useState} from 'react';
import { dajon } from '../../Context/DashboardMenu';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'nombre', headerName: 'Nombre', width: 150 },
  { field: 'app', headerName: 'Apellido Paterno', width: 150 },
  { field: 'apm', headerName: 'Apellido Materno', width: 150 },
  { field: 'correo', headerName: 'Last name', width: 150 },
  { field: 'puesto', headerName: 'Puesto', width: 110 },
];

export default function UserTable() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${dajon}/user/users`).then((response) => {
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
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  )
}
