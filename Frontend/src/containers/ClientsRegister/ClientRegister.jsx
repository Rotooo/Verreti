import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { dajon } from '../../Context/DashboardMenu';
import '../../assets/styles/styles.css';

export default function ClientRegister() {
  const [cliente, setCliente] = useState({
    nombre: '',
    calle: '',
    colonia: '',
    municipio: '',
    rfc: '',
    correo: '',
    cp: '',
    telefono: '',
    estado: '',
  });

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${dajon}/empresa/empresas`, cliente);
      console.log('Usuario registrado con éxito:', response.data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <>
    <Box>
      <div className='registerForm'>
        <h2>Registrar Empresa</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='nombre' 
              placeholder='Nombre de la empresa'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='calle' 
              placeholder='Calle'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='colonia' 
              placeholder='Colonia'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='municipio' 
              placeholder='Municipio'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='cp' 
              placeholder='Código Postal'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='estado' 
              placeholder='Estado'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='rfc' 
              placeholder='RFC'
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
              name='telefono' 
              placeholder='Telefono'
              onChange={handleChange}
            />
          <div className='spacing10' />
          <Button variant="contained" type='submit'>
            Registrar Empresa
          </Button>
        </form>
      </div>
      </Box>
    </>
  )
}
