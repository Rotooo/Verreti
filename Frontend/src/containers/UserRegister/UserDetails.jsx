import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { dajon } from '../../Context/DashboardMenu';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(data) {
  const [open, setOpen] = useState(false);
  const [dataGet, setDataGet] = useState([]);
  const Sid = data.data;

  /*const handleClickOpen = async (id) => {
    try {
      const response = await axios.get(`${dajon}/user/users${id}`);
      setDataGet(response.data);
      console.log(response.data);
      setOpen(true);
    } catch (error) {
      console.error('Error al obtener datos adicionales:', error);
    }
  };*/

  const handleClose = () => {
    setOpen(false);
  };

  const handleTest = () => {
    console.log(data.data);
    try{
      const response = axios.get(`${dajon}/user/us  ers/${Sid}`);
      setDataGet(response.data);
      console.log(response.data);
      setOpen(true);
    } catch (error){
      console.error('Error', error);
    }
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleTest}>
        <VisibilityIcon />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <p>{data.nombre}</p>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
