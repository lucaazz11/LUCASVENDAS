import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
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
        </header>

    );
}