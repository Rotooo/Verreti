import React from 'react';
import ReportForm from './ReportesForm';
import '../../assets/styles/styles.css';
import ButtonBack from '../../components/BackButton';

export default function ReportesContainer() {
  return (
    <div>
      <div className='spacing15' />
      <ButtonBack />
      <ReportForm />
    </div>
  )
}
