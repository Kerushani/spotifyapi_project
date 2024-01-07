import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4xxRagn6s6CMBHAX5nM12eJz86koYHfU",
    authDomain: "spotifyproject-860bf.firebaseapp.com",
    projectId: "spotifyproject-860bf",
    storageBucket: "spotifyproject-860bf.appspot.com",
    messagingSenderId: "9741238594",
    appId: "1:9741238594:web:6604047dedf345010008db",
    measurementId: "G-RN365G119Z"
  };

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)

export { firebase };