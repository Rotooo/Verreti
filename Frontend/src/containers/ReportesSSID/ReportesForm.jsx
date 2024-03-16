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
import { v4 as uuidv4 } from 'uuid';
import { dajon } from '../../Context/DashboardMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReportesForm() {
  let ins = [{
    codigo: '',
    marca: '',
    modelo: '',
    tipo: '',
    alcance_max: 0,
    division_min: 0,
    clase: '',
    tipo_inspeccion: '',
    numero: 0,
    nombre:'',
  }];
  let inn = {
    codigo: '',
    marca: '',
    modelo: '',
    tipo: '',
    alcance_max: 0,
    division_min: 0,
    clase: '',
    tipo_inspeccion: '',
    numero: 0,
    nombre: '',
  };
  const [personas, setPersonas] = useState([]);
  const [instrumentos, setInstrumentos] = useState(ins);
  const [selectedNombre, setSelectedNombre] = useState('');
  const [selectedPersona, setSelectedPersona] = useState(null);
  
  const [instrus, setInstrus] = useState([]);
  const [selectInstru, setSelectInstru] = useState('');
  const [selectActuIn, setselectActuIn] = useState(null);

  const unID = uuidv4();
  const [lat, setLatitud] = useState('');
  const [lon, setLongitud] = useState('');
  const [open, setOpen] = useState(false);
  const DateAct = new Date();
  const fechaHoy = `${DateAct.getDate()}/${DateAct.getMonth() + 1}/${DateAct.getFullYear()}`;
  const newFolio = Math.floor(1000000000 + Math.random() * 9000000000);
  const [reporte, setReporte] = useState({
    reporteid: '',
    folio: '',
    fecha: '',
    longitud: '',
    latitud: '',
    giro: '',
    nombre_empresa: '',
    calle: '',
    colonia: '',
    municipio: '',
    rfc: '',
    correo: '',
    cp: '',
    telefono: '',
    estado: '',
  });

  useEffect(() => {
    axios.get(`${dajon}/empresa/empresas`)
      .then(response => {
        setPersonas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos desde la API:', error);
      });

      axios.get(`${dajon}/instrumento/instruments`)
      .then(response => {
        setInstrus(response.data);
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

  const handleSelectChange = (event) => {
    const nombreSeleccionado = event.target.value;
    setSelectedNombre(nombreSeleccionado);

    const personaSeleccionada = personas.find(persona => persona.nombre === nombreSeleccionado);
    console.log(personaSeleccionada);
    setSelectedPersona(personaSeleccionada);
  };

  const handleSelectChangeInstru = (e, indx) => {
    /*const instruSeleecio = e.target.value;
    const acIntrusSelect = instrus.find(e => e.nombre === instruSeleecio);
    setselectActuIn(acIntrusSelect);
    const newinstrus = [...instrumentos];
    const newinstru = newinstrus[indx];
    newinstru=acIntrusSelect;
    setInstrumentos(newinstrus);*/
    const instruSeleecio = e.target.value;
    const acIntrusSelect = instrus.find(e => e.nombre === instruSeleecio);
    setselectActuIn(acIntrusSelect);
    console.log(acIntrusSelect, 'tumadre');
    const newinstrus = instrumentos.map((c, i) => {
      if (i === indx) {
        // Incrementa el contador de clics
        return c = acIntrusSelect;
      } else {
        // El resto no ha cambiado
        return c;
      }
    });
    console.log(newinstrus);
    setInstrumentos(newinstrus);
  };

  /*function handleIncrementClick(e, index) {
    const instruSeleecio = e.target.value;
    const acIntrusSelect = instrus.find(e => e.nombre === instruSeleecio);
    setselectActuIn(acIntrusSelect);
    const newinstrus = instrus.map((c, i) => {
      if (i === index) {
        // Incrementa el contador de clics
        return c= acIntrusSelect;
      } else {
        // El resto no ha cambiado
        return c;
      }
    });
    setInstrumentos(newinstrus);
  }*/

  const addInstrumento = () => {
    setInstrumentos(instrumentos.concat(inn));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setReporte({
      ...reporte,
      reporteid: unID,
      folio: newFolio,
      fecha: fechaHoy,
      longitud: lon,
      latitud: lat,
      giro: e.target.value,
      nombre_empresa: selectedPersona.nombre,
      calle: selectedPersona.calle,
      colonia: selectedPersona.colonia,
      municipio: selectedPersona.municipio,
      rfc: selectedPersona.rfc,
      correo: selectedPersona.correo,
      cp: selectedPersona.cp,
      telefono: selectedPersona.telefono,
      estado: selectedPersona.estado,
      instrumentos: instrumentos,
    });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${dajon}/report/reports`, reporte);
      setOpen(false);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
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
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit}>
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
                        name='fecha' 
                        value={fechaHoy}
                    />
                    </Grid>
                    <Grid item>
                      <TextField  
                        variant="outlined" 
                        size="small"
                        label="folio"
                        fullWidth
                        type='text' 
                        name='folio' 
                        value={newFolio}
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
                        value={lat}
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
                        value={lon}
                    />
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
                  <label>Seleccionar Empresa</label>
                <Select
                      id="demo-simple-select"
                      size="small"
                      value={selectedNombre}
                      onChange={handleSelectChange}
                      fullWidth
                  >
                    {personas.map((e) => (
                        <MenuItem key={e.id} value={e.nombre}>{e.nombre}</MenuItem>
                    ))}
                  </Select>
                  
                  <div className='spacing20' />
                  {selectedPersona && (
                    <>
                      <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='nombre_empresa'
                      label="Nombre de la empresa"
                      readOnly
                      value={selectedPersona.nombre}
                      onChange={(e => {
                        setReporte({
                          ...reporte,
                          nombre_empresa: e.target.value,
                          
                        });
                        console.log(e.target.value);
                      })}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='calle' 
                      label="Calle"
                      value={selectedPersona.calle}
                      readOnly
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='colonia' 
                      label="Colonia"
                      value={selectedPersona.colonia}
                      readOnly
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='municipio' 
                      label="Municipio"
                      value={selectedPersona.municipio}
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='cp' 
                      label="Código Postal"
                      value={selectedPersona.cp}
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='estado' 
                      label="Estado"
                      value={selectedPersona.estado}
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='rfc' 
                      label="RFC"
                      value={selectedPersona.rfc}
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='email' 
                      name='correo' 
                      label="Correo"
                      value={selectedPersona.correo}
                      onChange={handleChange}
                    />
                  <div className='spacing10' />
                  <TextField  
                      variant="outlined" 
                      size="small"
                      fullWidth
                      type='text' 
                      name='telefono' 
                      label="Telefono"
                      value={selectedPersona.telefono}
                      onChange={handleChange}
                    />
                    </>
                )}
              <div className='spacing10' />
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  onClick={(e)=>{console.log(instrumentos)}}
                >
                  Instrumentos
                </AccordionSummary>
                <AccordionDetails>
                <table>
                  <thead>
                      <tr>
                          <th>Instrumento</th>
                          <th>MARCA</th>
                          <th>MODELO</th>
                          <th>NUMERO DE SERIE</th>
                          <th>TIPO DE INSTRUMENTO</th>
                          <th>ALCANCE MAXIMO (Kg)</th>
                          <th>DIVISION MINIMA (g)</th>
                          <th>CLASE DE EXACTITUD</th>
                          <th>TIPO DE INSPECCION</th>
                      </tr>
                  </thead>
                  <tbody>
                      {instrumentos.map((element, indi) => {
                        return(
                          <tr>
                          <th>
                            <Select
                              id="demo-simple-select"
                              label="Empresa"
                              size="small"
                              value={element.nombre}
                              onChange={(e)=>{handleSelectChangeInstru(e, indi)}}
                              fullWidth
                                  >
                                  
                                    {instrus.map((e) => (
                                        <MenuItem key={e.id} value={e.nombre}>{e.nombre}</MenuItem>
                                    ))}
                          </Select>
                          </th>
                          {selectActuIn && (
                            <>
                              <td value={element.marca}>{element.marca}</td>
                              <td value={element.modelo}>{element.modelo}</td>
                              <td value={element.numero}>{element.numero}</td>
                              <td value={element.tipo}>{element.tipo}</td>
                              <td value={element.alcance_max}>{element.alcance_max}</td>
                              <td value={element.division_min}>{element.division_min}</td>
                              <td value={element.clase}>{element.clase}</td>
                              <td value={element.tipo_inspeccion}>{element.tipo_inspeccion}</td>
                            </>
                          )}
                        </tr>
                        )
                        
                      })}                      
                  </tbody>             
              </table>
              <button onClick={(e)=>{
                addInstrumento()
                e.preventDefault()                
                }}>
                  Agregar
              </button>
                </AccordionDetails>
              </Accordion>
              <div className='spacing10' />
              <TextField  
                        variant="outlined" 
                        size="small"
                        label="Giro"
                        fullWidth
                        type='text' 
                        name='giro' 
                        onChange={handleChange}
                    />
          <div className='spacing10' />
          <Button autoFocus color="inherit" type='submit' onClick={handleClose}>
              save
          </Button>
        </form>
      </Dialog>
    </React.Fragment>
  );
}