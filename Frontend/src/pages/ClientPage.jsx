import React from 'react';
import Navbar from '../components/navbar2';
import ClientContainer from '../containers/ClientsRegister/ClientContainer';
import '../assets/styles/styles.css';

export default function ClientPage() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <section className='baseSection'>
            <ClientContainer />
        </section>
    </>
  )
}
