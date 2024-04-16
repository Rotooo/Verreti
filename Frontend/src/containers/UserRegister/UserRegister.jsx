import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { toast } from 'react-toastify';
import {dajon} from '../../Context/DashboardMenu';
import '../../assets/styles/styles.css';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function UserRegister() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    app: '',
    apm: '',
    correo: '',
    password: '',
    puesto: '',
    vehiculo: '',
    equipo: '',
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${dajon}/user/users`, usuario);
      toast.success('Usuario registrado con éxito', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <>
    <Box>
      <div className='registerForm'>
        <h2>Registrar Usuario</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='nombre' 
            placeholder='Nombre'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='app'
            placeholder='Apellido Paterno'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            name='apm'
            type='text' 
            placeholder='Apellido Materno'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='email' 
            name='correo' 
            placeholder='Correo'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <label className='info-text'>Puesto</label>
            <Select
              id="demo-simple-select"
              size="small"
              fullWidth
              name='puesto'
              onChange={handleChange}
          >
              <MenuItem value='Administrador'>Administrador</MenuItem>
              <MenuItem value='Supervisor'>Supervisor</MenuItem>
              <MenuItem value='Empleado'>Empleado</MenuItem>
          </Select>
          <div className='spacing10' />
          <TextField  
            variant="outlined"
            size="small"
            fullWidth
            type='password'
            name='password' 
            placeholder='Contraseña'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Más Detalles
            </AccordionSummary>
            <AccordionDetails>
            <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text'
              name='vehiculo' 
              placeholder='Vehiculo'
              onChange={handleChange}
            />
            <div className='spacing10' />
            <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text'
              name='equipo' 
              placeholder='Equipo Adicional'
              onChange={handleChange}
            />
            </AccordionDetails>
          </Accordion>
          <div className='spacing10' />
          <Button variant="contained" type='submit'>
            Registrar Usuario
          </Button>
        </form>
      </div>
      </Box>
    </>
  )
}
