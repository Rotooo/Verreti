import React from 'react';
import Navbar from '../components/navbar2';
import UserContainer from '../containers/UserRegister/UserContainer';
import '../assets/styles/styles.css';

export default function UserPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <br />
      <section className='baseSection'>
        <UserContainer />
      </section>
    </>
  )
}
