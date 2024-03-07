import React from 'react';
import Img1 from '../../assets/img/Imagen1.png';
import Img2 from '../../assets/img/Imagen2.png';
import Img3 from '../../assets/img/Imagen3.png';
import '../../assets/styles/report.css';

export default function ReportTemplate() {
  return (
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
                <td scope="row" colSpan="4"><label><b>RAZON SOCIAL Y/O NOMBRE: </b> </label></td>
                <td scope="row" colSpan="4"><label><b>RFC: </b></label></td>
                <td scope="row" colSpan="4"><label><b>FOLIO: </b></label></td>
            </tr>
            <tr>
                <td scope="row" colSpan="4"><label><b>CALLE Y N°: </b></label></td>
                <td scope="row" colSpan="4"><label><b>CORREO: </b></label></td>
                <td scope="row" colSpan="4"><label><b>FECHA DE SOLICITUD:  </b></label></td>
            </tr>
            <tr>
                <td scope="row" colSpan="4"><label><b>COLONIA:  </b></label></td>
                <td scope="row" colSpan="4"><label><b>CP: </b></label></td>
                <td scope="row" colSpan="4"><label><b>TELEFONO:  </b></label></td>
            </tr>
            <tr>
                <td scope="row" colSpan="4"><label><b>MUNICIPIO: </b></label></td>
                <td scope="row" colSpan="2.5"><label><b>ESTADO:  </b></label></td>
                <td scope="row" colSpan="2.5"><label><b>UTM:  </b></label></td>
                <td scope="row" colSpan="2.5"><label><b>GIRO:  </b></label></td>
            </tr>
            <tr>
                <td scope="row" colSpan="6"></td>
                <td scope="row" colSpan="2.5"><label><b>Data  </b></label></td>
                <td scope="row" colSpan="2.5"><label><b>Data  </b></label></td>
            </tr>
            <tr>
                <td scope="row" colSpan="10" className="table-h4">
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
  )
}
