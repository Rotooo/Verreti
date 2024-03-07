import React, {useState} from 'react';
import axios from 'axios';
import { dajon } from '../Context/DashboardMenu';

export default function TestPage() {
   const [correo, setEmail] = useState();
   const [password, setPassword] = useState();

   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${dajon}/user/login`, {correo, password})
    .then(result => {
      console.log(result);
      if(result.data === "Sucess"){
        console.log("Bienvenido");
      } else {
        console.log("No tiene acceso");
      }
    })
    .catch(err => console.log(err));
   }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Correo</label>
          <input 
            name='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <label>Contraseña</label>
          <input 
            name='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br /><br />
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}
