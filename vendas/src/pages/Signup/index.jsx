import { Link } from 'react-router-dom';
import './SignUp.css'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { IoIosEye,IoIosEyeOff } from "react-icons/io";
import { FaCheckCircle,FaTimesCircle   } from "react-icons/fa";



const GOMLogo=()=>[
    <div className='logo'>
                <Link to='/'>
                <span className='logo-1'>G</span>
                <span className='logo-2'>O</span>
                <span className='logo-3'>M</span>
                </Link>
            </div>
]

export default function SignUpPage() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    //logica para validar senha em tempo real

    const validation = {
        length:password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&_]/.test(password),
    };

    const PasswordCriterion = ({isValid, text}) => (
        <li className={`criterion ${isValid ? 'valid' : ''}`}>
            {isValid ? <FaCheckCircle /> : <FaTimesCircle/>}
            <span>{text}</span>
        </li>
    )

    return(
        <div className='container'>
            <div className='formWrapper'>
                <GOMLogo />
                <h1 className='title'> Crie a sua conta. É grátis!</h1>

                <div className='socialLogin'>
                    <button className='google'>
                        <FcGoogle size={24}/>
                        </button>

                        <button className='facebook'>
                        <FaFacebookF size={24}/>
                        </button>
                </div>

                <div className='separator'>OU</div>

                <p className="subtitle">
                    Nos informe alguns dados para que possamos melhorar sua experiência
                </p>

                <form>
                    <div className='formGroup'>
                        <label htmlFor="cpf">
                            CPF <IoIosEye/>
                        </label>
                        <input type="text" id='cpf' name='cpf'
                        placeholder="000.000.000-00" required />
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="fullname">Nome Completo</label>
                        <input type="text" id='fullname' name='fullname' required />
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="nickname">Como você quer ser chamado (a)</label>
                        <input type="text" id='nickname' name='nickname' placeholder='Exemplo: João S.' />

                        <small>Aparecerá em seu perfil, anúncios e chats</small>
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="birthdate">Data de nascimento</label>
                        <input type="text" id='birthdate' name='birthdate' placeholder='dd/mm/aaaa'/>
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' name='email' placeholder='email' required />
                    <small>Enviaremos email de confirmação</small>
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="password">Senha</label>
                        <div className="passwordWrapper">
                            <input type={showPassword ? 'text' : 'password'} 
                            id='password' 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                            <button type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='eyeIcon'>
                                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                            </button>
                        </div>
                    </div>

                    <div className='passwordCritearia'>
                        <p>Para sua segurança, crie uma senha com no minimo:</p>
                        <ul>
                            <PasswordCriterion isValid={validation.length} text="8 caracteres" />
                       
                            <PasswordCriterion isValid={validation.uppercase} text="1 letra maiúscula" />

                            <PasswordCriterion isValid={validation.lowercase} text="1 letra minúscula" />

                            <PasswordCriterion isValid={validation.number} text="1 número" />

                            <PasswordCriterion isValid={validation.special} text="1 caracter especial (!@#$%^&*)" />
                        </ul>
                    </div>

                    <button type='submit' className='submitButton'>Cadastrar</button>

                    <p className="loginLink">
                        já tem uma conta? <Link to="/signin">Entrar</Link>   
                    </p>
                </form>
            </div>
        </div>
    )

}