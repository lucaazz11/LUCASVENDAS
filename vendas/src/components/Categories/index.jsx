import './categories.css';
import Celular from '../../assets/img/aplicartivo-movel.png';
import Carro from '../../assets/img/carro.png';
import Decoracao from '../../assets/img/decoracao.png';
import Eletro from '../../assets/img/eletrodomesticos.png';
import Esporte from '../../assets/img/esporte.png';
import habilitacao from '../../assets/img/habilitacao.png';

const categories = [
    { name: 'Celular', img: Celular },
    { name: 'Carro', img: Carro },
    { name: 'Decoração', img: Decoracao },
    { name: 'Eletrodomésticos', img: Eletro },
    { name: 'Esporte', img: Esporte },
    { name: 'Habilitação', img: habilitacao },
];

export default function Categories({ selectedBtn, onSelect }) {
    return (
        <section className='categories'>
            {categories.map((cat) => (
                <button
                    key={cat.name}
                    onClick={() => onSelect(cat.name)}
                    className={`btn ${selectedBtn === cat.name ? 'selectedBtn' : ''}`}
                >
                    <img src={cat.img} alt={cat.name} />
                    <span>{cat.name}</span>
                </button>
            ))}
        </section>
    );
}

