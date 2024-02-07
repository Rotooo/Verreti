import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';

export default function ClientRegister() {

  return (
    <>
    <Box>
      <div className='userRegister'>
        <h2>Registrar Empresa</h2>
        <br />
        <form>
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
          <div className='spacing10' />
          <Button variant="contained" type='submit'>
            Registrar Cliente
          </Button>
        </form>
      </div>
      </Box>
    </>
  )
}
