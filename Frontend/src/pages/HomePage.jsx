import React from 'react';
import Navbar from '../components/navbar';
import { dashboardMenu } from '../Context/DashboardMenu';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

export default function HomePage() {
  const getX = localStorage.getItem('userSection')
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className='baseSection'>
        <h3>Bienvenido {getX}</h3>
        <div className='spacing15' />
          <div className='menurow'>
            {dashboardMenu.map((e) => {
                return (
                  <div className='link-button' key={e.id}>
                    <Link to={e.url}>
                      <div className='button-box'>
                          <img src={e.icon}/>
                          <h2>{e.title}</h2>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
      </section>
    </>
  )
}
