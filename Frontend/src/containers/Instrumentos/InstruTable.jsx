import React, {useEffect, useState} from 'react';
import {dajon} from '../../Context/DashboardMenu';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../../assets/styles/styles.css';

const columns = [
  { field: 'nombre', headerName: 'Nombre', width: 110 },
  { field: 'marca', headerName: 'Marca', width: 150 },
  { field: 'modelo', headerName: 'Modelo', width: 110 },
  { field: 'tipo', headerName: 'Tipo', width: 110 },
  { field: 'alcance_max', headerName: 'Alcance Maximo', width: 110 },
  { field: 'division_min', headerName: 'División Minima', width: 110 },
  { field: 'clase', headerName: 'Inspección', width: 150 },
  { field: 'tipo_inspeccion', headerName: 'Tipo Inspección', width: 150 },
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
        pageSizeOptions={[5, 10, 25]}
      />
      <i className='info-text'>*Clase de Exactitud: Media= III, Ordinaria= IIII Fina= II.</i>
      <br />
      <i className='info-text'>*Tipo de Inspección: PA= Periódica Anual , P1S= Periódica 1° Semestre, P2S= Periódica 2° Semestre, I= Inicial, E=Extraordinaria</i>
    </Box>
  )
}
