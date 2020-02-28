import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDueqB5vs5NGEQkUP85dqPB3QLjnds23Qw",
    authDomain: "revents-d4d74.firebaseapp.com",
    databaseURL: "https://revents-d4d74.firebaseio.com",
    projectId: "revents-d4d74",
    storageBucket: "revents-d4d74.appspot.com",
    messagingSenderId: "821685019854",
    appId: "1:821685019854:web:0652f18d58888c49025c9f"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase