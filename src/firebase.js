import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMGBd1kTjRfKa52jpKgaScS8vac9nsjYw",
  authDomain: "as2-tdw.firebaseapp.com",
  projectId: "as2-tdw",
  storageBucket: "as2-tdw.firebasestorage.app",
  messagingSenderId: "531195484845",
  appId: "1:531195484845:web:8df4dae76f08fc485a4424",
  measurementId: "G-FDYXS4WGQC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;