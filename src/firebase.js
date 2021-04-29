// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBcoy-RoMsynnF-iIvZsmyqGoSXXrMWQ34",
  authDomain: "hot-dog-5b787.firebaseapp.com",
  databaseURL: "https://hot-dog-5b787.firebaseio.com",
  projectId: "hot-dog-5b787",
  storageBucket: "hot-dog-5b787.appspot.com",
  messagingSenderId: "498276901546",
  appId: "1:498276901546:web:7f208f627eb37ce085e6d3",
  measurementId: "G-VSJ41HKTCR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;