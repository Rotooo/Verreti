import React from 'react';
import Navbar from '../components/navbar';
import Grid from '@mui/material/Grid';
import { dashboardMenu } from '../Context/DashboardMenu';
import '../assets/styles/styles.css';

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className='baseSection'>
        <center>
          <div className='menu'>
            <Grid container>
              {dashboardMenu.map((e) => {
                return (
                  <Grid item>
                    <div className='box-button' key={e.id}>
                      <img src={e.icon} width='30%' />
                      <h3>{e.title}</h3>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </center>
      </section>
    </>
  )
}
