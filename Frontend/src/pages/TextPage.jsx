import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function TextPage() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const getDataBackEnd = async () => {
      try{
        const request = await axios.get('http://localhost:2000/user/users');
        setDatos(request.data);
      } catch(error){
        console.error(error);
      }
    };
    getDataBackEnd();
  }, []);

  return (
    <div>
      <h1>Datos:</h1>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>{dato.nombre}</li>
        ))}
      </ul>
    </div>
  )
}
