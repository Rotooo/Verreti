import React, { useState, useEffect } from 'react';
import '../../assets/styles/styles.css';
import Dexie from 'dexie';

const db = new Dexie('UserDatabase');
db.version(1).stores({ users: '++id,name,firstname,lastname,email,password,puesto' });

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
      <div className='userRegister'>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input 
            type='text' 
            name='name' 
            value={user.name} 
            onChange={handleChange} 
          />
          <label>Apellido Paterno:</label>
          <input 
            type='text' 
            name='firstname' 
            value={user.firstname} 
            onChange={handleChange} 
          />
          <label>Apellido Materno:</label>
          <input 
            type='text' 
            name='lastname' 
            value={user.lastname} 
            onChange={handleChange} 
          />
          <label>Correo:</label>
          <input 
            type='email' 
            name='email' 
            value={user.email} 
            onChange={handleChange} 
          />
          <label>Puesto:</label>
          <input 
            type='text'
            name='puesto'
            value={user.puesto}
            onChange={handleChange}
          />
          <label>Contraseña:</label>
          <input 
            type='password'
            name='password'
            value={user.password}
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
          <button type='submit'>Registrar Usuario</button>
        </form>

        <h2>Lista de Usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.puesto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
