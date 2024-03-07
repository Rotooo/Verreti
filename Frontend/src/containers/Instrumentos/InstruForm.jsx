import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {dajon} from '../../Context/DashboardMenu';
import '../../assets/styles/styles.css';

export default function InstruForm() {
  const [instru, setInstru] = useState({
    codigo: '',
    marca: '',
    modelo: '',
    tipo: '',
    alcance_max: 0,
    division_min: 0,
    clase: '',
    alias: '',
  });

  const handleChange = (e) => {
    setInstru({
      ...instru,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${dajon}/instrumento/instruments`, instru);
      console.log('Usuario registrado con éxito:', response.data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  return (
    <>
      <Box>
      <div className='registerForm'>
        <h2>Registrar Instrumentos</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='name'
            required 
            placeholder='Alias'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='marca' 
            placeholder='Marca'  
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            name='modelo'
            type='text' 
            placeholder='Modelo'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='serial number' 
            placeholder='Número Serial'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='number'
            name='Max Alcance'
            placeholder='Máximo Alcance'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='number'
            name='Min Division'
            placeholder='División Minimo'
          />
          <div className='spacing10' />
          <Button variant="contained" type='submit'>
            Registrar Instrumento
          </Button>
        </form>
      </div>
      </Box>
    </>
  )
}
