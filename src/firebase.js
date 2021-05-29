import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTbSYvm54ETHxGGyNBHm21sTgt7R-VagQ",
  authDomain: "discord-clone-2d067.firebaseapp.com",
  projectId: "discord-clone-2d067",
  storageBucket: "discord-clone-2d067.appspot.com",
  messagingSenderId: "486776808328",
  appId: "1:486776808328:web:07f9bea5cf0b1b7b7a503d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebaseApp.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
