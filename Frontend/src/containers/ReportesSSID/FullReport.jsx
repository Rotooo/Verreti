import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Img1 from '../../assets/img/Imagen1.png';
import Img2 from '../../assets/img/Imagen2.png';
import Img3 from '../../assets/img/Imagen3.png';
import '../../assets/styles/report.css';
import PrintIcon from '@mui/icons-material/Print';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { dajon } from '../../Context/DashboardMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function imprimirDiv() {
  const contenidoDiv = document.getElementById('template').innerHTML;
  const ventanaNueva = window.open('', '_blank', 'width=1000,height=1000');
  ventanaNueva.document.write('<html><head></head><body>');
  ventanaNueva.document.write(contenidoDiv);
  ventanaNueva.document.write('</body></html>');
  ventanaNueva.print();
}

export default function FullReport(info) {
  const [open, setOpen] = React.useState(false);
  const [report, setReport] = React.useState({});

  const handleClickOpen = () => {
      axios.get(`${dajon}/report/reports/${info.info}`).then((response) => {
          console.log(response.data);
          setReport(response.data);
        }).catch((error)=>{console.log(error)});
        setOpen(true);
  };

  const handlePrint = () => {
    imprimirDiv();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton size='small' variant="outlined" onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Reporte {report.folio}
            </Typography>
            <Button autoFocus color="inherit" startIcon={<PrintIcon />} onClick={handlePrint}>
              Imprimir
            </Button>
          </Toolbar>
        </AppBar>
        <div className='report-template'>
            <div id="template">
            <center>
                <table className="table-title">
                <tbody>
                <tr>
                    <th>
                    <p><b>SC-F-01A/10</b> Unidad  de Inspección Acreditada por ema a.c., con numero de acreditación UVIM-188</p>
                    <h4>SOLICITUD DE SERVICIO DE INSPECCION DE BÁSCULAS</h4>
                    <h5>NOM-010-SCFI-1994- Instrumentos de Medición- Instrumentos para pesar de funcionamiento</h5>
                    <h5>No  automático- Requisitos técnicos  Metrológicos.</h5>
                    </th>
                    <th><img src={Img1} width="50%" /></th>
                    <th>
                    <img src={Img2} width="40%" />
                    <br />
                    <img src={Img3} width="40%" />
                    </th>
                </tr>
                </tbody>
                </table>
                <table className="table-content">
                <tbody>
                <tr>
                    <td scope="row" colSpan="4"><label><b>RAZON SOCIAL Y/O NOMBRE:</b> {report.nombre_empresa}</label></td>
                    <td scope="row" colSpan="4"><label><b>RFC:</b> {report.rfc}</label></td>
                    <td scope="row" colSpan="4"><label><b>FOLIO:</b> {report.folio}</label></td>
                </tr>
                <tr>
                    <td scope="row" colSpan="4"><label><b>CALLE Y N°:</b> {report.calle}</label></td>
                    <td scope="row" colSpan="4"><label><b>CORREO:</b> {report.correo}</label></td>
                    <td scope="row" colSpan="4"><label><b>FECHA DE SOLICITUD:</b> {report.fecha}</label></td>
                </tr>
                <tr>
                    <td scope="row" colSpan="4"><label><b>COLONIA:</b> {report.colonia}</label></td>
                    <td scope="row" colSpan="4"><label><b>CP:</b> {report.cp}</label></td>
                    <td scope="row" colSpan="4"><label><b>TELEFONO:</b> {report.telefono}</label></td>
                </tr>
                <tr>
                    <td scope="row" colSpan="4"><label><b>MUNICIPIO:</b> {report.municipio}</label></td>
                    <td scope="row" colSpan="2.5"><label><b>ESTADO:</b> {report.estado}</label></td>
                    <td scope="row" colSpan="2.5"><label><b>UTM:</b></label></td>
                    <td scope="row" colSpan="2.5"><label><b>GIRO:</b> {report.giro}</label></td>
                </tr>
                <tr>
                    <td scope="row" colSpan="6"></td>
                    <td scope="row" colSpan="2.5"><label>{report.latitud}</label></td>
                    <td scope="row" colSpan="2.5"><label>{report.longitud}</label></td>
                </tr>
                <tr>
                    <td scope="row" colSpan="10" className="table-h4">
                      <hr size="1" />
                    <center>
                        <h4>DATOS DEL INSTRUMENTO</h4>
                    </center>
                    </td>
                </tr>
                <tr>
                    <td><label><b>N°</b></label></td>
                    <td><label><b>MARCA</b></label></td>
                    <td><label><b>MODELO</b></label></td>
                    <td><label><b>NUMERO DE SERIE</b></label></td>
                    <td><label><b>TIPO DE INSTRUMENTO</b></label></td>
                    <td><label><b>ALCANCE MAXIMO (Kg)</b></label></td>
                    <td><label><b>DIVISIÓN MINIMA (g)</b></label></td>
                    <td><label><b>CLASE DE EXACTITUD</b></label></td>
                    <td><label><b>TIPO DE INSPECCION</b></label></td>
                    <td><label><b>APROBACION MODELO PROTOTIPO (DGN)</b></label></td>
                </tr>
                <tr>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                    <td><label><b>°</b></label></td>
                </tr>
                </tbody>
                </table>
                <br />
                <div className="instru">
                <b>Tipo de Instrumento: E= Electrónico, M= Mecánico, H= Hibrido o Electromecánico, MI= Multi-Intervalo, R=De Relación C= Cucharon y/o Colgante.</b><br />
                <b>Clase de Exactitud: Media= III, Ordinaria= IIII Fina= II.</b><br />
                <b>Tipo de Inspección: PA= Periódica Anual , P1S= Periódica 1° Semestre, P2S= Periódica 2° Semestre, I= Inicial, E=Extraordinaria</b>
                </div>
            </center>
            </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
