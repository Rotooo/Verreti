import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { grey, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: "#22B531" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Verreti
          </Typography>
          <Link to={"/"}>
            <IconButton aria-label="logout">
              <ExitToAppIcon sx={{ color: grey[50] }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}