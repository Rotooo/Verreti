import React, {useEffect, useState} from 'react';
import { dajon } from '../../Context/DashboardMenu';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'reporteid', headerName: 'ID', width: 150 },
  { field: 'fecha', headerName: 'Fecha', width: 150 },
  { field: 'folio', headerName: 'Folio', width: 150 },
  { field: 'nombre_empresa', headerName: 'Empresa', width: 110 },
];

export default function ReportesTable() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${dajon}/report/reports`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if(!post) return null;

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
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
