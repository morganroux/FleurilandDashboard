import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';

const Products: React.FC = () => {
    const[products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProducts() {
            const newProducts = await axios.get("http://localhost:3000/api/products");
            setProducts(newProducts.data);
            console.log("hello",newProducts.data);
        }
        loadProducts();
    }, [])
    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => 
                <p key={product.id}>Product id : {product.id}</p>
            )}
        </div>
    )
}

export default Products;