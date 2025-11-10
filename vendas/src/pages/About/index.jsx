import './Home.css'
import { Link } from 'react-router-dom';

export default function Page() {
    return (
        <div>
            <h1>Pagina Sobre</h1>
            <Link to='/about'>Sobre</Link>
        </div>
    )}