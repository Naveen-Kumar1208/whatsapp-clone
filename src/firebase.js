import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9t_fqG1KgNwT6ZoghviUKQA2QqzYgzzU",
    authDomain: "whatsapp-clone-f82e0.firebaseapp.com",
    projectId: "whatsapp-clone-f82e0",
    storageBucket: "whatsapp-clone-f82e0.appspot.com",
    messagingSenderId: "2619678177",
    appId: "1:2619678177:web:e052abe43b1a6ecfe746a0",
    measurementId: "G-RJKQQLPNL2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;