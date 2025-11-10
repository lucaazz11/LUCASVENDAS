import './Home.css'
import { Link } from 'react-router-dom';

export default function Page() {
    return (
        <div>
            <h1>Pagina Home</h1>
            <Link to='/about'>Home</Link>
        </div>
    )}