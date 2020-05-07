import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const ConfirmationAlert = ({ openAlert, handleCloseStar }) => {
    console.log('confirmation alert');
    return (
        <Snackbar openAlert={openAlert} autoHideDuration={6000} onClose={handleCloseStar}>
            <Alert onClose={handleCloseStar} severity="success">
                This is a success message!
          </Alert>
        </Snackbar>
    )
};

export default ConfirmationAlert