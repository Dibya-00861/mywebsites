import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDLrMSjK656AzgoxtaqeY8neV0Ur3gWmkw",
    authDomain: "blogtesting-aace3.firebaseapp.com",
    projectId: "blogtesting-aace3",
    storageBucket: "blogtesting-aace3.appspot.com",
    messagingSenderId: "321924264511",
    appId: "1:321924264511:web:20cc87db3079681fb47e8a",
    measurementId: "G-4CQBWHCKCR"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{timestamp};
  export default firebaseApp.firestore();
