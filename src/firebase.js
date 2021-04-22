import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6wrI6VO2wVtiJuNPhsFaCCZHtrvYAkeE",
    authDomain: "clone-amaz00n.firebaseapp.com",
    projectId: "clone-amaz00n",
    storageBucket: "clone-amaz00n.appspot.com",
    messagingSenderId: "549520928162",
    appId: "1:549520928162:web:3069a7385843242c5e16fb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  