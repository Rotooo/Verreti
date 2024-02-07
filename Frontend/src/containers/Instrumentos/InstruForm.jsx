import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';

export default function InstruForm() {

  return (
    <>
      <Box>
      <div className='registerForm'>
        <h2>Registrar Instrumentos</h2>
        <br />
        <form>
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='name'
            required 
            placeholder='Alias'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='marca' 
            placeholder='Marca'  
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            name='modelo'
            type='text' 
            placeholder='Modelo'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text' 
            name='serial number' 
            placeholder='Número Serial'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
            name='Max Alcance'
            placeholder='Máximo Alcance'
          />
          <div className='spacing10' />
          <TextField  
            variant="outlined" 
            size="small"
            fullWidth
            type='text'
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
