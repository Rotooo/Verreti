import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';
import {baseurl} from '../../Context/DashboardMenu';
import axios from 'axios';

export default function UserRegister() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    app: '',
    apm: '',
    correo: '',
    password: '',
    puesto: '',
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
      // Aquí deberías reemplazar la URL con la API real donde registrarás al usuario
      const response = await axios.post('http://localhost:2000/user/users', usuario);
      console.log('Usuario registrado con éxito:', response.data);
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
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='puesto'
            placeholder='Puesto' 
            onChange={handleChange}
          />
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
          {/*<br />
          <br />
          <label>Permisos:</label>
          <select>
            <option value='0'>Sin permisos</option>
            <option value='1'>Empleado</option>
            <option value='2'>Administrador</option>
          </select>
          */}
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
