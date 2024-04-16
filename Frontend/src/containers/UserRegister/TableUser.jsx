import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { dajon } from '../../Context/DashboardMenu';
import axios from 'axios';
import '../../assets/styles/table.css';

export default function TableUser() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${dajon}/user/users`);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchData();
  }, []);

  const eliminarDato = async (id) => {
    try {
      await axios.delete(`${dajon}/user/users/${id}`);
      setPost(post.filter((dato) => dato._id !== id));
    } catch (error) {
      console.error('Error al eliminar el dato:', error);
    }
  };

  return (
    <div className='tabla'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Correo</th>
              <th>Puesto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {post.map((e, index) => {
              return(
              <tr key={index}>
                <td>{e.nombre}</td>
                <td>{e.app}</td>
                <td>{e.apm}</td>
                <td>{e.correo}</td>
                <td>{e.puesto}</td>
                <td>
                <Button 
                  variant="contained"
                  size="small" 
                  color="error" 
                  onClick={() => eliminarDato(e._id)}
                >
                  Eliminar
                </Button>
              </td>
              </tr>
            )})}
          </tbody>
      </table>
    </div>
  )
}
