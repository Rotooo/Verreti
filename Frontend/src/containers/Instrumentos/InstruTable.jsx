import React, {useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { InDexDB } from '../../Context/IndexDB';
import Dexie from 'dexie';

const db = new Dexie('UserDatabase');
db.version(1).stores({ instrumentos: '++id,name,marca,modelo,serialnumber,Maxalcance,Mindivision' });

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Correo',
    width: 150,
    editable: false,
  },
  {
    field: 'puesto',
    headerName: 'Area',
    width: 150,
    editable: false,
  },
];

export default function InstruTable() {
  const example = useContext(InDexDB);

  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const userList = await db.instrumentos.toArray();
    example.setInstrus(userList);
  };

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
