import React from 'react';
import Navbar from '../components/navbar2';
import ReportDIBContainer from '../containers/ReportesDIB/ReportesContainer';

export default function ReportsDIB() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <section>
            <ReportDIBContainer />
        </section>
    </>
  )
}
