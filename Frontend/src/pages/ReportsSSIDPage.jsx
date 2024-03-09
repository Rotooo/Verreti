import React from 'react';
import Navbar from '../components/navbar2';
import ReportSSIDContainer from '../containers/ReportesSSID/ReportesContainer';
import '../assets/styles/styles.css';

export default function ReportsSSIDPage() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <section>
            <ReportSSIDContainer />
        </section>
    </>
  )
}
