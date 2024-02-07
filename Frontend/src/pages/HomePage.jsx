import React from 'react';
import Navbar from '../components/navbar';
import Grid from '@mui/material/Grid';
import { dashboardMenu } from '../Context/DashboardMenu';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className='baseSection'>
          <div className='menu'>
            <Grid container>
              {dashboardMenu.map((e) => {
                return (
                  <Grid item key={e.id}>
                    <Link to={e.url}>
                      <div className='box-button'>
                        <img src={e.icon} />
                        <h3>{e.title}</h3>
                      </div>
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </div>
      </section>
    </>
  )
}
