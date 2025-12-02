
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCPkJ3zS1DeDL-JK9Il9j7Vrq5mgC7nn3E",
  authDomain: "projeto-venda-33d94.firebaseapp.com",
  projectId: "projeto-venda-33d94",
  storageBucket: "projeto-venda-33d94.firebasestorage.app",
  messagingSenderId: "805126316673",
  appId: "1:805126316673:web:7882dff3a672a6423ea380",
  measurementId: "G-886DH0FYRZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

//Fução para logar
async function signInWithGooglePopup(){
    try{
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}
//Função para deslogar
async function logout(){
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout};