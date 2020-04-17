import React, { useEffect, useState } from 'react';
import Home from '../components/Home/Home';
import { firebase, googleAuthProvider } from '../helper/firebase';
import { Button } from '@material-ui/core';

const LoginPage: React.FC = () => {

  const hanldeClick =  () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
  return (
    <Button
    onClick={hanldeClick}
    >Click</Button>
  )
}

const Index: React.FC = () => {
  const [auth, setAuth] = useState(false);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      setAuth(true);
    } else {
      setAuth(false);
    }
  });
    return (
      <React.Fragment>
        <title>Fleuriland</title>
        { auth ? <Home /> : <LoginPage />}
      </React.Fragment>
    );
  }

  export default Index;