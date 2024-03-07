import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import BackArrowIcon from '@mui/icons-material/ArrowBackIosNew';

export default function BackButton() {
  return (
    <>
        <Link to={'/home'}>
            <Tooltip title="Regresar">
                <IconButton aria-label="back">
                    <BackArrowIcon />
                </IconButton>
            </Tooltip>
        </Link>
    </>
  )
}
