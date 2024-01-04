import React from 'react'
import Navbar from '../components/navbar';
import InstruContainer from '../containers/Instrumentos/InstruContainer';
import '../assets/styles/styles.css';

export default function InstruPage() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <br />
        <section className='baseSection'>
            <InstruContainer />
        </section>
    </>
  )
}
