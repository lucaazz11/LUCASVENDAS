import { Link } from 'react-router-dom';

export default function Page() {
    return (
    <div>
        <h2>Página home</h2>
        <Link to='/about'>Sobre</Link>
    </div>
    )
}