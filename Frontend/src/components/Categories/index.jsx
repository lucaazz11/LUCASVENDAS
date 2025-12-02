import React from 'react';
import './Categories.css';
import Celular from '../../../assets/celular.png';
import Carro from '../../../assets/carro.png';
import Decoracao from '../../../assets/decoracao.png';
import Eletro from '../../../assets/eletro.png';
import Esporte from '../../../assets/esporte.png';
import Habitacao from '../../../assets/habitacao.png';

const categoriesData = [
    { name: 'Celular', img: Celular },
    { name: 'Carro', img: Carro },
    { name: 'Decoracao', img: Decoracao },
    { name: 'Eletro', img: Eletro },
    { name: 'Esporte', img: Esporte },
    { name: 'Habitação', img: Habitacao },
];

export default function Categories({ selectedbtn, onSelect }) {
    return (
        <section className="categories">
            {categoriesData.map((cat) => (
                <button
                    key={cat.name}
                    onClick={() => onSelect(cat.name)}
                    className={`btn ${selectedbtn === cat.name ? 'selectedBtn' : ''}`}
                >
                    <img src={cat.img} alt={cat.name} />
                    <span>{cat.name}</span>
                </button>
            ))}
        </section>
    );
}
