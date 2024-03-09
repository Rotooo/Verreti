import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BackArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import '../assets/styles/styles.css';

export default function ButtonAppBar() {

  const deleteSeccion = () => {
    localStorage.removeItem("userSection");
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: "#22B531" }}>
        <Toolbar>
            <Link to={"/home"}>
            <IconButton aria-label="logout">
              <BackArrowIcon sx={{ color: grey[50] }} />
            </IconButton>
          </Link>
          <div className='div-spacing-horizontal' />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Verreti
          </Typography>
          <Link to={"/"}>
            <IconButton onClick={deleteSeccion}>
              <ExitToAppIcon sx={{ color: grey[50] }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}