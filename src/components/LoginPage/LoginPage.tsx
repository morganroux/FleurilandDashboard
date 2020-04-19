import React, { useEffect, useState, useContext } from 'react';
import Home from '../../components/Home/Home';
import { firebase, googleAuthProvider } from '../../helper/firebase';
import { Container, Box, Button, Paper, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyleLoginPage } from './LoginPage.style';

const LoginPage: React.FC = () => {
    const classes = useStyleLoginPage();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const hanldeGoogleClick =  () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
    }

    const hanldeSignIn =  async (e) => {
        e.preventDefault();
        // await firebase.auth().createUserWithEmailAndPassword('test@test.fr', '123456').catch(function(error) {
        //     // Handle Errors here.
        //     setError(error.message)
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        // });
        firebase.auth().signInWithEmailAndPassword(email, pwd).catch(function(error) {
            // Handle Errors here.
            setError(error.message)
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={10}>
                    <Typography className={classes.typo} variant='h2'>Fleuriland</Typography>
                    <form  noValidate autoComplete="off" onSubmit={hanldeSignIn}>
                    <Container className={classes.form}>
                        <TextField
                            className={classes.textfield} 
                            value={email}
                            onChange={(event)=>setEmail(event.target.value)}
                            id="mail" 
                            label="Email" 
                            variant="outlined" 
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <MailOutlineIcon style={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <TextField 
                            className={classes.textfield}
                            value={pwd}
                            onChange={(event => setPwd(event.target.value))}
                            id="password" 
                            type={showPassword ?"text" : "password"}
                            label="Password" 
                            variant="outlined" 
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <VpnKeyIcon style={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                      >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {!!error && <Typography variant="body1" className={`${classes.typo} ${classes.error}`}>{error}</Typography>}
                        <Button className={classes.button} type="submit">Login</Button>
                        
                    </Container>
                    </form>
                    <Container>
                        <Typography variant="body1" className={classes.typo}>Or login with : </Typography> 
                       <Box className= {classes.providers}>
                            <Button 
                                className={classes.google} 
                                variant="outlined" 
                                onClick={hanldeGoogleClick}
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