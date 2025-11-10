import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import './Home.css';
import { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export default function Page() {

    const [selectedBtn, setSelectBtn] = useState(''); // ✅ ADICIONADO
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts(); // ✅ Corrigi 'gatProducts' para 'getProducts'
            setProducts(data.slice(0, 8));
        }
        loadProducts();
    }, []);

    return (
        <div>
            <Categories selectedBtn={selectedBtn} onSelect={setSelectBtn} />

            <div className='cards-container'>
                {products.map((item) => (
                    <Card 
                        name={item.name} 
                        image={item.image}
                        category={item.category} 
                        description={item.description}
                        price={item.price}  
                    />
                ))}
            </div>
        </div>
    );
}