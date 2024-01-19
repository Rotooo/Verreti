import React, { useState, useEffect } from 'react';
import Dexie from 'dexie';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../assets/styles/styles.css';

const db = new Dexie('UserDatabase');
db.version(2).stores({ users: '++id,name,firstname,lastname,email,password,puesto' });

export default function UserRegister() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    puesto: '',
  });

  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const userList = await db.users.toArray();
    setUsers(userList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.users.add(user);
    setUser({
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      puesto: '',
    });
    loadUsers();
    console.log('Usuario Registrado');
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
            name='name' 
            value={user.name}
            required 
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
            value={user.firstname} 
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
            value={user.lastname} 
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
            value={user.email} 
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
            value={user.puesto}
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
            value={user.password}
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
