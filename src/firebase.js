import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ9RlqE4uOaVjpF6lZdXBsSB0mYukWNDY",
  authDomain: "disneyplus-clone-ca3d2.firebaseapp.com",
  projectId: "disneyplus-clone-ca3d2",
  storageBucket: "disneyplus-clone-ca3d2.appspot.com",
  messagingSenderId: "990599287836",
  appId: "1:990599287836:web:ccebfbee5efcf95dec3bd9",
  measurementId: "G-8LTYZR23GJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
