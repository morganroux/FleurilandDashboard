import React, { useEffect, useState, useContext } from 'react';
import Home from '../../components/Home/Home';
import { firebase, googleAuthProvider } from '../../helper/firebase';
import { Container, Box, Button, Paper, Typography, TextField, InputAdornment } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { AuthContext,  } from '../../context/auth/auth.context';
import { useStyleLoginPage } from './LoginPage.style';

const LoginPage: React.FC = () => {
    const classes = useStyleLoginPage();
    const hanldeClick =  () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
    }
    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={10}>
                    <Typography className={classes.typo} variant='h2'>LOGIN</Typography>
                    <form  noValidate autoComplete="off">
                    <Container className={classes.form}>
                        <TextField
                            className={classes.textfield} 
                            id="mail" 
                            label="Email" 
                            variant="outlined" 
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <MailOutlineIcon />
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <TextField className={classes.textfield} 
                            id="password" 
                            label="Password" 
                            variant="outlined" 
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VpnKeyIcon />
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <Button className={classes.button} onClick={hanldeClick}>Login</Button>
                        
                    </Container>
                    </form>
                    <Container>
                        <Typography variant="body1" className={classes.typo}>Or login with : </Typography> 
                       <Box className= {classes.providers}>
                            <Button 
                                className={classes.google} 
                                variant="outlined" 
                                onClick={hanldeClick}
                            >Google
                            </Button>
                        </Box>
                    </Container>
                    
                </Paper>
            </Container>
        </Box>
    )
}

export default LoginPage;