import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';

export default function UserRegister() {
  const [datos, setDatos] = useState({
    nombre: '',
    app: '',
    apm: '',
    correo: '',
    password: '',
    puesto: '',
    permisos: 0,
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const sendUser = () => {
    console.log('enviar')
  };

  return (
    <>
    <Box>
      <div className='registerForm'>
        <h2>Registrar Usuario</h2>
        <br />
        <form onSubmit={sendUser}>
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='name' 
            onChange={handleChange}
            placeholder='Nombre'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='firstname'
            onChange={handleChange} 
            placeholder='Apellido Paterno'  
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            name='lastname'
            type='text' 
            onChange={handleChange}
            placeholder='Apellido Materno'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='email' 
            name='email' 
            onChange={handleChange}
            placeholder='Correo'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='puesto'
            onChange={handleChange}
            placeholder='Puesto'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='password'
            name='password' 
            onChange={handleChange}
            placeholder='Contraseña'
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
