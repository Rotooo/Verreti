import React from 'react';
import ReportForm from './ReportesForm';
import ReportesTable from './ReportTable';
import '../../assets/styles/styles.css';

export default function ReportesContainer() {
  return (
    <div>
      <div className='spacing15' />
        <h1>Reportes de Dictamen de Inspección de Básculas</h1>
      <div className='spacing15' />
        <ReportForm />
      <div className='spacing15' />
        <ReportesTable />
    </div>
  )
}
