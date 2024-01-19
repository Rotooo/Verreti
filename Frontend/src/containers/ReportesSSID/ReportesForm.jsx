import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dexie from 'dexie';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const db = new Dexie('UserDatabase');
db.version(2).stores({ companies: '++id,name,calle,colonia,municipio,rfc,correo,cp,telefono,estado' });

export default function ReportesForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Nuevo Reporte
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nuevo Reporte
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form>
          <div className='spacing10' />
          <Grid container>
            <Grid item>
              <h3>Datos de la Empresa</h3>
              <br />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <div className='spacing10' />
              <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='name' 
              placeholder='Nombre de la empresa'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='calle' 
              placeholder='Calle'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='colonia' 
              placeholder='Colonia'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='municipio' 
              placeholder='Municipio'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='cp' 
              placeholder='Código Postal'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='estado' 
              placeholder='Estado'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='rfc' 
              placeholder='RFC'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='email' 
              name='correo' 
              placeholder='Correo'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='telefono' 
              placeholder='Telefono'
            />
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <div className='spacing10' />
        </form>
      </Dialog>
    </React.Fragment>
  );
}