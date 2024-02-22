import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseurl} from '../Context/DashboardMenu';

export default function TextPage() {
  //const baseurl = "http://localhost:2000/user/users";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseurl).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if(!post) return null;

  return (
    <div>
      <h1>Datos:</h1>
      <p>{post.nombre}</p>
    </div>
  )
}
