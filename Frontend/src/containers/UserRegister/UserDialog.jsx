 import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const UserDialog = ({nombre, app, apm, correo, puesto}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className="dialog">
            <IconButton onClick={handleClickOpen}>
                <VisibilityIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                Detalles
            </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {nombre}
                        <br />
                        {app}
                        <br />
                        {apm}
                        <br />
                        {correo}
                        <br />
                        {correo}
                        <br />
                        {puesto}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};