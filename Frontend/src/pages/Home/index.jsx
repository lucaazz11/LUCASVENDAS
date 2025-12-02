import './Home.css'
import Categories from '../../components/Categories';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/ProductService';

export default function Page() {
    const [selected, setSelected] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data.slice(0, 8));
        }
        loadProducts();
    }, []);

    return (
        <>
            <Categories 
                selectedbtn={selected} 
                onSelect={setSelected} 
            />

            <div className='cards-container'>
                {products.map((item) => (
                    <Card
                        key={item.id}     // 👈 importante
                        name={item.title}
                        image={item.image}
                        category={item.category}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}
