import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore"
import "firebase/firebase-storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU60-Svq_KA-DJSwXFEKTFxGd8Xo5s1ZI",
  authDomain: "onor-develop.firebaseapp.com",
  databaseURL: "https://onor-develop.firebaseio.com",
  projectId: "onor-develop",
  storageBucket: "onor-develop.appspot.com",
  messagingSenderId: "884021644204",
  appId: "1:884021644204:web:a59f21f55a5b83dc4f0809",
  measurementId: "G-ZVNG5C78EQ",
};
// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.firestore = app.firestore()
    this.storage = app.storage()
  }

  //auth api
  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();
  doResetPassword = (email) => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
  //end of auth api
}

export default Firebase;
