import "./Signin.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { signInWithGooglePopup } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { doLogin} from "../../lib/authHandler";
import { useAuth } from "../../contexts/AuthContext";

export default function Signin() {
    const [loading, setLoading] = useState("false");
    const [user, setUser] = useState(null);
    

    async function handleGoogleSignIn() {
        setLoading(true);
        setError(null);
        try {

          const userData = {
                name: userObj.displayName,
                email: userObj.email,
                photoUrl: userObj.photoURL,
                uid: userObj.uid,
          }
          doLogin(token , userData);
            setLogged(true);
            setUser(userData);
            console.log('Usuário logado com sucesso:', userData);

           navigate('/');

            const userObj = await signInWithGooglePopup();
            setUser({
                name: userObj.displayName,
                email: userObj.email,
                photoUrl: userObj.photoURL,
                uid: userObj.uid,
            });
            console.log('Usuário logado:', userObj);
        }catch (err) {
            console.err('Erro ao fazer login com Google', err);
            setError(err.mensage || 'Erro no login');
        }finally {
            setLoading(false);
        }
    }


  return (
    <div className="container">
      <div className="card">
        <h2>Entre na sua conta e negocie com segurança!</h2>
        <p>acesse e aproveite uma expêriencia dentro da GOM</p>
    

      <div className="socialLogin">
        <button className="google">
          <FcGoogle size={24} />
        </button>
        <button className="facebook">
          <FaFacebookF size={24} />
        </button>
      </div>

      <div className="divider">
        <span>Ou connect com</span>
      </div>

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="digite seu email" />

      <button className="acessarBtn">Acessar</button>

      <p className="register">
        Não tem conta ainda ?<a href="/SignUp">Cadastre-se</a>

      </p>

      {error && <p style={{ color: 'red' , marginTop: 12 }}>{error}</p>}

      {user && (
            <div className='user-info'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       style ={{ marginTop: 16 }}>
            <img
                src={user.photoUrl}
                alt={user.name}
                style={{ width: 48, borderRadius: '50%' }}
            />
            <div>
                <p>
                <strong>{user.nome}</strong>
                </p>
                <p style={{ fontSize: 12 }}>{user.email}</p>
            </div>
            </div>

                
            )}
      </div>

      <p className='terms'>
        Ao continuar, você concorda com nossos <a href="/">Termos de Serviço</a> e 
        <a href="/">Política de Privacidade</a> da GOM e seus parceiros, e em receber
        comunicações da GOM
      </p> 
    </div>
  );
}