import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { dajon } from '../Context/DashboardMenu';

export default function TestPage() {
  const DateAct = new Date();
  const unID = uuidv4();
  const [empresa, setEmpresas] = useState([]);
  const [selectEmpresa, setSEmpresa] = useState('');
  const [selectOne, setOneEmpresa] = useState(null);
  const [lat, setLatitud] = useState('');
  const [lon, setLongitud] = useState('');
  const fechaHoy = `${DateAct.getDate()}/${DateAct.getMonth() + 1}/${DateAct.getFullYear()}`;
  const newFolio = Math.floor(1000000000 + Math.random() * 9000000000);
  const [report, setReport] = useState({
    reporteid: '',
    folio: '',
    fecha: '',
    longitud: '',
    latitud: '',
    giro: '',
    nombre_empresa: '',
    calle: '',
    colonia: '',
    municipio: '',
    rfc: '',
    correo: '',
    cp: '',
    telefono: '',
    estado: '',
    inspector: '',
    auxiliar: '',
  });

  useEffect(() => {
    axios.get(`${dajon}/empresa/empresas`)
      .then(response => {
        setEmpresas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos desde la API:', error);
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var latitud = position.coords.latitude;
          var longitud = position.coords.longitude;
          setLatitud(latitud);
          setLongitud(longitud);    
        }, function(error) {
          console.error('Error al obtener la ubicación: ' + error.message);
        });
      } else {
        console.error('Geolocalización no es compatible en este navegador');
      }
  }, []);

  const handleSelect = (e) => {
    const seleEmpresa = e.target.value;
    setSEmpresa(seleEmpresa);

    const empresaSelected = empresa.find(e => e.nombre === seleEmpresa);
    setOneEmpresa(empresaSelected);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({
      ...report,
      reporteid: unID,
      folio: newFolio,
      fecha: fechaHoy,
      longitud: lon,
      latitud: lat,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${dajon}/report/reports`, report);
      console.log('Usuario registrado con éxito:', response.data);
      window.location.reload();
      setOpen(false);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='reporteid' placeholder='folio' value={unID} onChange={handleChange} />
        <br/><br/>
        <input type='text' name='fecha' placeholder='folio' value={fechaHoy} onChange={handleChange} />
        <br/><br/>
        <input type='text' name='folio' placeholder='folio' value={newFolio} onChange={handleChange} />
        <br/><br/>
        <input type='text' name='longitud' placeholder='longitud' value={lon} onChange={handleChange} />
        <br/><br/>
        <input type='text' name='latitud' placeholder='latitud' value={lat} onChange={handleChange} />
        <br/><br/>
        <input type='text' name='giro' placeholder='giro' onChange={handleChange} />
        <br/><br/>
        <select onChange={handleSelect} value={selectEmpresa}>
          <option>Seleccionar algo</option>
          {empresa.map((e) => {
            <option key={e.id} value={e.nombre}>{e.nombre}</option>
          })}
        </select>
        <br/><br/>
        {selectOne && (
          <>
          <input type='text' name='nombre_empresa' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
          <input type='text' name='' placeholder='' onChange={handleChange} />
          <br/><br/>
        </>
        )}
        <input type='text' name='' placeholder='' onChange={handleChange} />
        <br/><br/>
        <input type='text' name='' placeholder='' onChange={handleChange} />
        <br/><br/>
        <button type='submit'>Enviar</button>
        
      </form>
    </div>
  )
}
