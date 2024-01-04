import React, { useState, useEffect } from 'react';
import Dexie from 'dexie';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';

const db = new Dexie('UserDatabase');
db.version(1).stores({ instrumentos: '++id,name,marca,modelo,serialnumber,Maxalcance,Mindivision' });

export default function InstruForm() {
  const [instrus, setInstrus] = useState([]);
  const [instru, setInstru] = useState({
    name: '',
    marca: '',
    modelo: '',
    serialNumber: '',
    Maxalcance: '',
    Mindivision: '',
  });

  useEffect(() => {
    loadInstruments();
  });

  const loadInstruments = async () => {
    const userList = await db.instrumentos.toArray();
    setInstrus(userList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstru((prevInstru) => ({
      ...prevInstru,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.instrumentos.add(user);
    setInstru({
      name: '',
      marca: '',
      modelo: '',
      serialNumber: '',
      Maxalcance: '',
      Mindivision: '',
    });
    loadInstruments();
    console.log('Usuario Registrado');
  };

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
            value={instru.name}
            required 
            onChange={handleChange}
            placeholder='Alias'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='marca' 
            value={instru.marca} 
            onChange={handleChange}
            placeholder='Marca'  
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            name='modelo'
            type='text' 
            value={instru.modelo} 
            onChange={handleChange} 
            placeholder='Modelo'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='serial number' 
            value={instru.serialNumber} 
            onChange={handleChange}
            placeholder='Número Serial'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='Max Alcance'
            value={instru.Maxalcance}
            onChange={handleChange}
            placeholder='Máximo Alcance'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='Min Division'
            value={instru.Mindivision}
            onChange={handleChange} 
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
