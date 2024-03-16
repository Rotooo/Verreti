import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { v4 as uuidv4 } from 'uuid';
import {dajon} from '../../Context/DashboardMenu';
import '../../assets/styles/styles.css';

export default function InstruForm() {
  const uniqueId = uuidv4();
  const [instru, setInstru] = useState({
    codigo: uniqueId,
    marca: '',
    modelo: '',
    tipo: '',
    alcance_max: '',
    division_min: '',
    tipo_inspeccion: '',
    clase: '',
    nombre: '',
    numero: '',
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
            name='nombre'
            required 
            label="Nombre"
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='marca' 
            label='Marca'  
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='numero' 
            label='Número Serie'  
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            name='modelo'
            type='text' 
            label='Modelo'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <label className='info-text'>Tipo de instrumento</label>
          <Select
              id="demo-simple-select"
              size="small"
              fullWidth
              name='tipo'
              onChange={handleChange}
          >
              <MenuItem value='E'>Electrónico</MenuItem>
              <MenuItem value='M'>Mecánico</MenuItem>
              <MenuItem value='H'>Hibrido o Electromecánico</MenuItem>
              <MenuItem value='MI'>Multi-Intervalo</MenuItem>
              <MenuItem value='R'>De Relación</MenuItem>
              <MenuItem value='C'>Cucharon y/o Colgante</MenuItem>
          </Select>
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='alcance_max'
            label='Máximo Alcance'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='division_min'
            label='División Minimo'
            onChange={handleChange}
          />
          <div className='spacing10' />
          <label className='info-text'>Clase de Exactitud</label>
            <Select
              id="demo-simple-select"
              size="small"
              fullWidth
              name='clase'
              onChange={handleChange}
          >
              <MenuItem value='III'>Media</MenuItem>
              <MenuItem value='IIII'>Ordinaria</MenuItem>
              <MenuItem value='II'>Fina</MenuItem>
          </Select>
          <div className='spacing10' />
          <label className='info-text'>Tipo de Inspección</label>
            <Select
              id="demo-simple-select"
              size="small"
              fullWidth
              name='tipo_inspeccion'
              onChange={handleChange}
          >
              <MenuItem value='PA'>Periódica Anual</MenuItem>
              <MenuItem value='P1S'>Periódica 1° Semestre</MenuItem>
              <MenuItem value='P2S'>Periódica 2° Semestre</MenuItem>
              <MenuItem value='I'>Inicial</MenuItem>
              <MenuItem value='E'>Extraordinaria</MenuItem>
          </Select>
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
