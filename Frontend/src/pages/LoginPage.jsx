import React, { useState }from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dajon } from '../Context/DashboardMenu';
import AppIcon from '../assets/img/verreti-icon.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Verreti '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [correo, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${dajon}/user/login`, {correo, password})
    .then(result => {
      if(result.data === "Sucess"){
        localStorage.setItem("userSection", correo);
        history('/home');
      } else {
        console.log("No tiene acceso");
      }
    })
    .catch(err => console.log(err));
   }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <img src={AppIcon} width="30%" />
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="correo"
              label="Correo"
              name="correo"
              autoComplete="email"
              size="small"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              size="small"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#22B531" }}
            >
              Iniciar Sesión
            </Button>
            </form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}