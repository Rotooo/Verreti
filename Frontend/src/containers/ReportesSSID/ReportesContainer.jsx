import React from 'react';
import ReportForm from './ReportesForm';
import ReportesTable from './ReportesTable';
import '../../assets/styles/styles.css';

export default function ReportesContainer() {
  return (
    <div>
      <div className='spacing15' />
        <ReportForm />
      <div className='spacing15' />
        <ReportesTable />
    </div>
  )
}
