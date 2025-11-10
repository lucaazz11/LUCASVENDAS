
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC3qM2RicAIqFXsuSrb3NCs58UF9ZE2yz0",
  authDomain: "login-fa688.firebaseapp.com",
  projectId: "login-fa688",
  storageBucket: "login-fa688.firebasestorage.app",
  messagingSenderId: "841487149305",
  appId: "1:841487149305:web:7093f7f33f4a6557405a28",
  measurementId: "G-QWDT5K83L8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//Função login popup
async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
}
}

//Função para logout
async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };