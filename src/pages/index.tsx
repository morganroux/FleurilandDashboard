import React, { useEffect, useState, useContext } from 'react';
import Home from '../components/Home/Home';
import { firebase, googleAuthProvider } from '../helper/firebase';
import { Button } from '@material-ui/core';
import { AuthContext, AuthProvider } from '../context/auth/auth.context';

const LoginPage: React.FC = () => {
  const {authState, authDispatch} = useContext(AuthContext);
  const hanldeClick =  () => {
    
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
  return (
    <Button
    onClick={hanldeClick}
    >Login</Button>
  )
}

const Index: React.FC = () => {
  const {authState, authDispatch} = useContext(AuthContext);
  const auth = authState.auth;

  const setAuthListener = () => { 
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        authDispatch({type: 'LOGIN'});
      } else 
        authDispatch({type: 'LOGOUT'});
    })
  };

  useEffect(setAuthListener,[]);

    return (
      <React.Fragment>
        <title>Fleuriland</title>
        { auth ? <Home /> : <LoginPage />}
      </React.Fragment>
    );
  }

  export default Index;