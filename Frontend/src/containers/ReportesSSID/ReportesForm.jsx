import React, { useState, useEffect } from 'react';
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { dajon } from '../../Context/DashboardMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReportesForm() {
  const [opciones, setOpciones] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [infoInput1, setInfoInput1] = useState('');
  const [infoInput2, setInfoInput2] = useState('');
  const [infoInput3, setInfoInput3] = useState('');
  const [lat, setLatitud] = useState('');
  const [lon, setLongitud] = useState('');
  const [latGeo, setGeoLatitud] = useState('');
  const [lonGeo, setGeoLongitud] = useState('');
  const [folio, setFolio] = useState('');
  const [open, setOpen] = useState(false);
  const DateAct = new Date();
  const fechaHoy = `${DateAct.getDate()}/${DateAct.getMonth() + 1}/${DateAct.getFullYear()}`;

  useEffect(() => {
    axios.get(`${dajon}/empresa/empresas`)
      .then(response => {
        setOpciones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos desde la API:', error);
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var latitud = position.coords.latitude;
          var longitud = position.coords.longitude;
          setLatitud(latitud);
          setLongitud(longitud);    
        }, function(error) {
          console.error('Error al obtener la ubicación: ' + error.message);
        });
      } else {
        console.error('Geolocalización no es compatible en este navegador');
      }
  }, []);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        setGeoLatitud(latitud);
        setGeoLongitud(longitud); 
        console.log(`${latGeo}, ${lonGeo}`);   
      }, function(error) {
        console.error('Error al obtener la ubicación: ' + error.message);
      });
    } else {
      console.error('Geolocalización no es compatible en este navegador');
    }
  };

  const handleSelectChange = (event) => {
    const nuevaOpcion = event.target.value;
    setOpcionSeleccionada(nuevaOpcion);

    const opcionSeleccionadaData = opciones.find(opcion => opcion.opcion === nuevaOpcion);

    if (opcionSeleccionadaData) {
      setInfoInput1(opcionSeleccionadaData.infoInput1);
      setInfoInput2(opcionSeleccionadaData.infoInput2);
      setInfoInput3(opcionSeleccionadaData.infoInput3);
    } else {
      setInfoInput1('');
      setInfoInput2('');
      setInfoInput3('');
    }
  };

  const generarFolio = () => {
    const today = `${DateAct.getDate()}${DateAct.getMonth() + 1}${DateAct.getFullYear()}`;
    const newFolio = Math.random().toString(36).substring(7).toUpperCase() + `${today}`;
    setFolio(newFolio);
  };

  const handleClickOpen = () => {
    setOpen(true);
    generarFolio();
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
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Datos del Documento
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item>
                      <TextField  
                        variant="outlined" 
                        size="small"
                        label="Fecha"
                        fullWidth
                        type='text' 
                        name='folio' 
                        placeholder='Folio'
                        value={fechaHoy}
                    />
                    </Grid>
                    <Grid item>
                      <TextField  
                        variant="outlined" 
                        size="small"
                        label="Folio"
                        fullWidth
                        type='text' 
                        name='folio' 
                        placeholder='Folio'
                        value={folio}
                    />
                    </Grid>
                    <Grid item>
                      <TextField  
                        variant="outlined" 
                        size="small"
                        label="Latitud"
                        fullWidth
                        type='text' 
                        name='latitud' 
                        placeholder='latitud'
                        value={lat || latGeo}
                    />
                    </Grid>
                    <Grid item>
                      <TextField  
                        variant="outlined" 
                        size="small"
                        label="Longitud"
                        fullWidth
                        type='text' 
                        name='longitud'
                        placeholder='Longitud'
                        value={lon || lonGeo}
                    />
                    </Grid>
                    <Grid item>
                      <Button onClick={handleGetLocation}>Localización</Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Datos de la Empresa
                </AccordionSummary>
                <AccordionDetails>
                <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Empresa"
                      size="small"
                      autoWidth
                      value={opcionSeleccionada} 
                      onChange={handleSelectChange}
                  >
                    <MenuItem>Seleccionar</MenuItem>
                    {opciones.map(opcion => (
                      <MenuItem key={opcion.nombre} value={opcion.nombre}>{opcion.nombre}</MenuItem>
                    ))}
                  </Select>
                  <div className='spacing10' />
                  <TextField  
                  variant="outlined" 
                  size="small"
                  fullWidth
                  type='text' 
                  name='nombre'
                  readOnly
                  value={infoInput1}
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
                  value={infoInput2}
                  readOnly
                />
              <div className='spacing10' />
              <TextField  
                  variant="outlined" 
                  size="small"
                  fullWidth
                  type='text' 
                  name='colonia' 
                  placeholder='Colonia'
                  value={infoInput3}
                  readOnly
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
              <div className='spacing10' />
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Instrumentos
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
          <div className='spacing10' />
        </form>
      </Dialog>
    </React.Fragment>
  );
}