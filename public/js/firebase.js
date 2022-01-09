// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCwZAWvWKoxyR4lTTN1mJaxhyipzX21Qic",
  authDomain: "shetalkstech-ae617.firebaseapp.com",
  projectId: "shetalkstech-ae617",
  storageBucket: "shetalkstech-ae617.appspot.com",
  messagingSenderId: "517405404888",
  appId: "1:517405404888:web:fcb66f7bef2450ee3c71ad",
};

// Initialize Firebase
// let app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
// let db = getFirestore(app);

let db = firebase.firestore();
