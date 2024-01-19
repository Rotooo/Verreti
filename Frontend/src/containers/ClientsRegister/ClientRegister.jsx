import React, { useState, useEffect } from 'react';
import Dexie from 'dexie';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';

const db = new Dexie('UserDatabase');
db.version(2).stores({ companies: '++id,name,calle,colonia,municipio,rfc,correo,cp,telefono,estado' });

export default function ClientRegister() {
  const [companyData, setCompanyData] = useState({
    name: '',
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
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.companies.add(companyData);
      alert('Datos de la empresa guardados con éxito');
      setCompanyData({ 
        name: '',
        calle: '',
        colonia: '',
        municipio: '',
        rfc: '',
        correo: '',
        cp: '',
        telefono: '',
        estado: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Box>
      <div className='userRegister'>
        <h2>Registrar Usuario</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='name' 
              value={companyData.name}
              onChange={handleChange}
              placeholder='Nombre de la empresa'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='calle' 
              value={companyData.calle}
              onChange={handleChange}
              placeholder='Calle'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='colonia' 
              value={companyData.colonia}
              onChange={handleChange}
              placeholder='Colonia'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='municipio' 
              value={companyData.municipio}
              onChange={handleChange}
              placeholder='Municipio'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='cp' 
              value={companyData.cp}
              onChange={handleChange}
              placeholder='Código Postal'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='estado' 
              value={companyData.estado}
              onChange={handleChange}
              placeholder='Estado'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='rfc' 
              value={companyData.rfc}
              onChange={handleChange}
              placeholder='RFC'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='email' 
              name='correo' 
              value={companyData.correo}
              onChange={handleChange}
              placeholder='Correo'
            />
          <div className='spacing10' />
          <TextField  
              variant="outlined" 
              size="small"
              fullWidth
              type='text' 
              name='telefono' 
              value={companyData.telefono}
              onChange={handleChange}
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
