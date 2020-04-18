import React, { useEffect, useState, useContext } from 'react';
import Home from '../components/Home/Home';
import LoginPage from '../components/LoginPage/LoginPage';
import { firebase, googleAuthProvider } from '../helper/firebase';
import { AuthContext, AuthProvider } from '../context/auth/auth.context';

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
        authDispatch({type: 'LOGIN', user});
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