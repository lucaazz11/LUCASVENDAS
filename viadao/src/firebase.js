// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_M1eQPWNfCTlgI8qdKSWat8xHvBVYi4",
  authDomain: "vendalucas-3a621.firebaseapp.com",
  projectId: "vendalucas-3a621",
  storageBucket: "vendalucas-3a621.firebasestorage.app",
  messagingSenderId: "717980874893",
  appId: "1:717980874893:web:46d8aa2b7102588010cac4",
  measurementId: "G-F26KPSGR6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

// Provedor Google
const provider = new GoogleAuthProvider();

//Função login popup
async function signInWitchGooglePopup() {
try {
const result = await signInWithPopup(auth, googleProvider);
return result.user;
} catch (error) {
throw error;
}
}

// função para logout
async function logout() {
await signOut(auth);
}

export { auth, googleProvider, signInWitchGooglePopup, logout };