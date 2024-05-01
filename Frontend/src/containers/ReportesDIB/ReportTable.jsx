import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios';
import { dajon } from '../../Context/DashboardMenu';
import PrintIcon from '@mui/icons-material/Print';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import ReactPDF from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';
import FullReport from './FullReport';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    joinDate: randomCreatedDate(),
    role: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 36,
    joinDate: randomCreatedDate(),
    role: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 19,
    joinDate: randomCreatedDate(),
    role: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    joinDate: randomCreatedDate(),
    role: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 23,
    joinDate: randomCreatedDate(),
    role: randomRole(),
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = useState(initialRows);
  const [post, setPost] = useState([]);
  const [tempo, setTempo] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [dialogData, setDialogData] = useState(null);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleCloseDialog = () => {
    setDialogData(null);
  };

  useEffect(() => {
    axios.get(`${dajon}/bascreport/bascreports`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if(!post) return null;

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const obtenerObjeto = (e) => {
    axios.get(`${dajon}/bascreport/bascreports/${e}`).then((response) => {
      //setPost(response.data);
      console.log(response.data);
    });
  };

  const columns = [
    { 
      field: 'reporteid', 
      headerName: 'ID', 
      width: 150, 
    },
    {
      field: 'fecha',
      headerName: 'Fecha',
      width: 150,
    },
    {
      field: 'folio',
      headerName: 'Folio',
      width: 150,
    },
    {
      field: 'nombre_empresa',
      headerName: 'Empresa',
      width: 150,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 300,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <FullReport info={id} />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="error"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={post}
        columns={columns}
        editMode="row"
        getRowId={(post) => post._id}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
