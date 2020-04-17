import * as firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyARkwRYJ_YxFZByN8dDCpD8Cirs8j3sB9w",
    authDomain: "fleuriland-dashboard.firebaseapp.com",
    databaseURL: "https://fleuriland-dashboard.firebaseio.com",
    projectId: "fleuriland-dashboard",
    storageBucket: "fleuriland-dashboard.appspot.com",
    messagingSenderId: "1055673697175",
    appId: "1:1055673697175:web:51faa702f99b19eb7ffad2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
//const database = firebase.database();

export { firebase, googleAuthProvider }