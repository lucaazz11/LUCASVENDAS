import './header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { isLogged, doLogout, getUser } from '../../lib/authHandler';


export default function Header() {
    const { logged, user, setLogged, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const checkLogin = () => {
            const LoggedIn = isLogged();
            setLogged(LoggedIn);
            if (LoggedIn) {
                const userData = getUser();
                setUser(userData);
            } else {
                setUser(null);
            }
        }
        
        const handleLogout = () => {
            doLogout();
            setLogged(false);
            setUser(null);
            navigate('/signin');
        }


    return (
        <header className='header'>
            {/* Logo ou título do site */}
            <div className='logo'>
                <Link to="/">
                <span className='logo-1'></span>
                <span className='logo-2'></span>
                <span className='logo-3'></span>
                </Link>
                </div>


                {/* Navegação */}
                <div className='search-bar'>
                    <input type='text' placeholder='Buscar "Apartamento"' />
                    <div className='location'>
                        <button className='search-btn'>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </div>
                </div>

                <nav className='navbar'>
                    <ul>
                        {logged ?}
                        <>
                        <link to='/' classname ="anuncio">
                        Meus Anúncios
                        </link>
                        </li>
                        <li>
                            <link to='/post-an-ad'
                            classname = 'anunciarbtn'>
                                postar um anúncio
                            </link>
                        </li>
                       
        </header>

        

    );
}