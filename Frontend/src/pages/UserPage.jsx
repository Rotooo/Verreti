import React from 'react';
import Navbar from '../components/navbar';
import UserContainer from '../containers/UserRegister/UserContainer';

export default function UserPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <br />
      <section>
        <UserContainer />
      </section>
    </>
  )
}
